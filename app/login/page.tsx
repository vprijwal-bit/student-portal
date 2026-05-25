"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import axios from "axios"

import { GraduationCap, Eye, EyeOff } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Label } from "@/components/ui/label"

export default function LoginPage() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const [userType, setUserType] =
    useState<"student" | "admin">("student")

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault()

    try {

      const response = await axios.post(
        "http://13.232.215.228:5000/login",
        {
          email,
          password
        }
      )

      alert(response.data)

      if(response.data === "Login Success"){

        if(userType === "admin"){
          router.push("/admin")
        }

        else{
          router.push("/student")
        }

      }

    }

    catch(error){
      alert("Login Failed")
    }

  }

  return (

    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-background">

      <div className="w-full max-w-md">

        {/* Logo */}

        <div className="flex flex-col items-center mb-8">

          <div className="flex items-center gap-2 mb-2">

            <div className="p-2 bg-primary rounded-lg">
              <GraduationCap className="h-8 w-8 text-primary-foreground" />
            </div>

            <span className="text-2xl font-bold text-foreground">
              EduPortal
            </span>

          </div>

          <p className="text-muted-foreground text-sm">
            Student Management System
          </p>

        </div>

        <Card className="border-border shadow-lg">

          <CardHeader className="space-y-1 pb-4">

            <CardTitle className="text-2xl font-semibold text-center text-card-foreground">
              Welcome Back
            </CardTitle>

            <CardDescription className="text-center">
              Sign in to your account to continue
            </CardDescription>

          </CardHeader>

          <CardContent>

            {/* User Type Toggle */}

            <div className="flex bg-muted rounded-lg p-1 mb-6">

              <button
                type="button"
                onClick={() => setUserType("student")}
                className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${
                  userType === "student"
                    ? "bg-card text-card-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Student
              </button>

              <button
                type="button"
                onClick={() => setUserType("admin")}
                className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${
                  userType === "admin"
                    ? "bg-card text-card-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Admin
              </button>

            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

              <div className="space-y-2">

                <Label htmlFor="email" className="text-card-foreground">
                  Email
                </Label>

                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-input border-border"
                />

              </div>

              <div className="space-y-2">

                <Label htmlFor="password" className="text-card-foreground">
                  Password
                </Label>

                <div className="relative">

                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-input border-border pr-10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >

                    {
                      showPassword
                        ? <EyeOff className="h-4 w-4" />
                        : <Eye className="h-4 w-4" />
                    }

                  </button>

                </div>

              </div>

              <div className="flex items-center justify-between text-sm">

                <label className="flex items-center gap-2 cursor-pointer">

                  <input
                    type="checkbox"
                    className="rounded border-border"
                  />

                  <span className="text-muted-foreground">
                    Remember me
                  </span>

                </label>

                <Link
                  href="#"
                  className="text-primary hover:underline"
                >
                  Forgot password?
                </Link>

              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Sign In
              </Button>

            </form>

            <div className="mt-6 text-center text-sm">

              <span className="text-muted-foreground">
                {"Don't have an account? "}
              </span>

              <Link
                href="/register"
                className="text-primary hover:underline font-medium"
              >
                Sign up
              </Link>

            </div>

          </CardContent>

        </Card>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          &copy; 2024 EduPortal. All rights reserved.
        </p>

      </div>

    </div>

  )
}
