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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function RegisterPage() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    studentId: "",
    department: "",
    password: "",
    confirmPassword: "",
  })

  const [showPassword, setShowPassword] = useState(false)

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false)

  const router = useRouter()

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault()

    if(formData.password !== formData.confirmPassword){

      alert("Passwords do not match")

      return
    }

    try {

      const response = await axios.post(
        "http://13.232.215.228:5000/register",
        {
          name:
            formData.firstName +
            " " +
            formData.lastName,

          email: formData.email,

          department: formData.department,

          password: formData.password
        }
      )

      alert(response.data)

      router.push("/login")

    }

    catch(error){

      alert("Registration Failed")

    }

  }

  return (

    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-background">

      <div className="w-full max-w-lg">

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
              Create Account
            </CardTitle>

            <CardDescription className="text-center">
              Register as a new student
            </CardDescription>

          </CardHeader>

          <CardContent>

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >

              <div className="grid grid-cols-2 gap-4">

                <div className="space-y-2">

                  <Label htmlFor="firstName">
                    First Name
                  </Label>

                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="space-y-2">

                  <Label htmlFor="lastName">
                    Last Name
                  </Label>

                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>

              <div className="space-y-2">

                <Label htmlFor="email">
                  Email
                </Label>

                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="grid grid-cols-2 gap-4">

                <div className="space-y-2">

                  <Label htmlFor="studentId">
                    Student ID
                  </Label>

                  <Input
                    id="studentId"
                    name="studentId"
                    placeholder="STU-2024-001"
                    value={formData.studentId}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="space-y-2">

                  <Label htmlFor="department">
                    Department
                  </Label>

                  <Select
                    onValueChange={(value) =>
                      setFormData({
                        ...formData,
                        department: value
                      })
                    }
                  >

                    <SelectTrigger>

                      <SelectValue placeholder="Select" />

                    </SelectTrigger>

                    <SelectContent>

                      <SelectItem value="Computer Science">
                        Computer Science
                      </SelectItem>

                      <SelectItem value="Mechanical Engineering">
                        Mechanical Engineering
                      </SelectItem>

                      <SelectItem value="Business Admin">
                        Business Admin
                      </SelectItem>

                    </SelectContent>

                  </Select>

                </div>

              </div>

              <div className="space-y-2">

                <Label htmlFor="password">
                  Password
                </Label>

                <div className="relative">

                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>

              <div className="space-y-2">

                <Label htmlFor="confirmPassword">
                  Confirm Password
                </Label>

                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />

              </div>

              <Button
                type="submit"
                className="w-full"
              >
                Create Account
              </Button>

            </form>

            <div className="mt-6 text-center text-sm">

              <span className="text-muted-foreground">
                Already have an account?
              </span>

              <Link
                href="/login"
                className="text-primary hover:underline font-medium"
              >
                {" "}Sign in
              </Link>

            </div>

          </CardContent>

        </Card>

      </div>

    </div>

  )

}
