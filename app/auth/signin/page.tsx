"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { AuthForm } from "@/components/auth-form"

export default function SignIn() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <AuthForm onSuccess={() => router.push("/")} />
      </div>
    </div>
  )
}