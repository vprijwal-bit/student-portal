"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push("/login")
  }, [router])

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="animate-pulse text-primary">Loading...</div>
    </div>
  )
}
