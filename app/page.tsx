"use client"

import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { BookCard } from "@/components/book-card"
import { LoadingSpinner } from "@/components/loading-spinner"
import { EmptyState } from "@/components/empty-state"
import { PageHeader } from "@/components/page-header"
import { Book } from "@/types"

export default function Home() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [books, setBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (session) {
      fetchBooks()
    } else {
      setLoading(false)
    }
  }, [session])

  const fetchBooks = async () => {
    try {
      const response = await fetch("/api/books")
      if (response.ok) {
        const data = await response.json()
        setBooks(data)
      }
    } catch (error) {
      console.error("Error fetching books:", error)
    } finally {
      setLoading(false)
    }
  }

  const deleteBook = async (id: string) => {
    try {
      const response = await fetch(`/api/books/${id}`, {
        method: "DELETE",
      })
      if (response.ok) {
        setBooks(books.filter(book => book.id !== id))
      }
    } catch (error) {
      console.error("Error deleting book:", error)
    }
  }

  if (status === "loading" || loading) {
    return <LoadingSpinner />
  }

  if (!session) {
    router.push("/auth/signin")
    return null
  }

  return (
    <div>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <PageHeader 
          title="My Books"
          description="Manage your personal book collection"
          action={{
            label: "Add New Book",
            href: "/add"
          }}
        />

        {books.length === 0 ? (
          <EmptyState
            title="No books in your collection yet"
            description="Start building your personal library by adding your first book."
            actionLabel="Add Your First Book"
            actionHref="/add"
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onDelete={deleteBook}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
