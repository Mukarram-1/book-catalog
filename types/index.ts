export interface Book {
  id: string
  title: string
  author: string
  genre: string
  createdAt: string
  updatedAt?: string
}

export interface User {
  id: string
  name?: string | null
  email?: string | null
  image?: string | null
}
