"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { BookForm } from "@/components/book-form"
import { LoadingSpinner } from "@/components/loading-spinner"

export default function AddBook() {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === "loading") {
    return <LoadingSpinner />
  }

  if (!session) {
    router.push("/auth/signin")
    return null
  }

  return (
    <div>
      <Navigation />
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <BookForm
          onSuccess={() => router.push("/")}
          onCancel={() => router.push("/")}
        />
      </div>
    </div>
  )
}
