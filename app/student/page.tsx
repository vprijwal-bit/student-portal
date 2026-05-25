"use client"

import { useState } from "react"
import Link from "next/link"
import { 
  GraduationCap, 
  User, 
  BookOpen, 
  Calendar, 
  Settings, 
  LogOut, 
  Bell, 
  ChevronDown,
  Award,
  Clock,
  FileText,
  Mail,
  Phone,
  MapPin,
  Edit,
  BarChart3,
  CheckCircle,
  BookMarked
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"

// Sample data
const studentProfile = {
  name: "Alice Johnson",
  id: "STU-2024-001",
  email: "alice.j@university.edu",
  phone: "+1 (555) 123-4567",
  address: "123 University Ave, Campus City, ST 12345",
  department: "Computer Science",
  semester: "6th Semester",
  gpa: "3.8",
  credits: 98,
  totalCredits: 120,
  status: "Active",
  enrollmentDate: "August 2021",
}

const enrolledCourses = [
  { code: "CS401", name: "Machine Learning", instructor: "Dr. Smith", progress: 75, grade: "A-" },
  { code: "CS402", name: "Database Systems", instructor: "Prof. Wilson", progress: 60, grade: "B+" },
  { code: "CS403", name: "Software Engineering", instructor: "Dr. Brown", progress: 85, grade: "A" },
  { code: "MATH301", name: "Statistics", instructor: "Prof. Lee", progress: 45, grade: "B" },
]

const recentActivity = [
  { type: "assignment", title: "ML Assignment 4 submitted", time: "2 hours ago", icon: FileText },
  { type: "grade", title: "Database Quiz 3: 92/100", time: "1 day ago", icon: Award },
  { type: "attendance", title: "Attended Software Engineering lecture", time: "2 days ago", icon: CheckCircle },
  { type: "enrollment", title: "Enrolled in Advanced Algorithms", time: "1 week ago", icon: BookMarked },
]

const upcomingDeadlines = [
  { title: "ML Project Report", course: "CS401", date: "Dec 15, 2024", daysLeft: 5 },
  { title: "Database Final Exam", course: "CS402", date: "Dec 18, 2024", daysLeft: 8 },
  { title: "SE Presentation", course: "CS403", date: "Dec 20, 2024", daysLeft: 10 },
]
const navItems = [

  {
    icon: User,
    label: "Profile",
    href: "/student/profile",
    active: true
  },

  {
    icon: BookOpen,
    label: "Courses",
    href: "/student/courses",
    active: false
  },

  {
    icon: Calendar,
    label: "Schedule",
    href: "/student/schedule",
    active: false
  },

  {
    icon: BarChart3,
    label: "Grades",
    href: "/student/grades",
    active: false
  },

  {
    icon: Settings,
    label: "Settings",
    href: "/student/settings",
    active: false
  },

]

export default function StudentDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-sidebar text-sidebar-foreground transition-all duration-300 flex flex-col`}>
        {/* Logo */}
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-sidebar-primary rounded-lg">
              <GraduationCap className="h-6 w-6 text-sidebar-primary-foreground" />
            </div>
            {sidebarOpen && <span className="text-lg font-bold">EduPortal</span>}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                    item.active 
                      ? 'bg-sidebar-accent text-sidebar-accent-foreground' 
                      : 'text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  {sidebarOpen && <span>{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-sidebar-border">
          <Link
            href="/login"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground transition-colors"
          >
            <LogOut className="h-5 w-5" />
            {sidebarOpen && <span>Logout</span>}
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-card border-b border-border px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-card-foreground">Student Dashboard</h1>
              <p className="text-sm text-muted-foreground">Welcome back, {studentProfile.name.split(' ')[0]}!</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5 text-muted-foreground" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-destructive rounded-full text-[10px] text-destructive-foreground flex items-center justify-center">2</span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary text-primary-foreground text-sm">AJ</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium text-card-foreground">{studentProfile.name}</span>
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/login">Logout</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Card */}
            <Card className="lg:col-span-1 border-border">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-card-foreground">My Profile</CardTitle>
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center text-center mb-6">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarFallback className="bg-primary text-primary-foreground text-2xl">AJ</AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-semibold text-card-foreground">{studentProfile.name}</h3>
                  <p className="text-sm text-muted-foreground">{studentProfile.id}</p>
                  <span className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
                    {studentProfile.status}
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{studentProfile.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{studentProfile.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{studentProfile.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{studentProfile.department}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{studentProfile.semester}</span>
                  </div>
                </div>

                {/* Academic Progress */}
                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="text-sm font-medium text-card-foreground mb-4">Academic Progress</h4>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-muted/50 rounded-lg p-3 text-center">
                      <p className="text-2xl font-bold text-primary">{studentProfile.gpa}</p>
                      <p className="text-xs text-muted-foreground">Current GPA</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-3 text-center">
                      <p className="text-2xl font-bold text-primary">{studentProfile.credits}</p>
                      <p className="text-xs text-muted-foreground">Credits Earned</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Degree Progress</span>
                      <span className="text-card-foreground font-medium">{Math.round((studentProfile.credits / studentProfile.totalCredits) * 100)}%</span>
                    </div>
                    <Progress value={(studentProfile.credits / studentProfile.totalCredits) * 100} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Right Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Current Courses */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-card-foreground">Enrolled Courses</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {enrolledCourses.map((course) => (
                      <div key={course.code} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">{course.code}</span>
                            <span className="text-sm font-medium text-card-foreground">{course.name}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">{course.instructor}</p>
                          <div className="mt-2">
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-muted-foreground">Progress</span>
                              <span className="text-card-foreground">{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} className="h-1.5" />
                          </div>
                        </div>
                        <div className="ml-4 text-center">
                          <span className="text-lg font-bold text-primary">{course.grade}</span>
                          <p className="text-xs text-muted-foreground">Grade</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Bottom Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Recent Activity */}
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-card-foreground">Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <activity.icon className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-card-foreground">{activity.title}</p>
                            <p className="text-xs text-muted-foreground">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Upcoming Deadlines */}
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-card-foreground">Upcoming Deadlines</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingDeadlines.map((deadline, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-orange-100 rounded-lg">
                              <Clock className="h-4 w-4 text-orange-600" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-card-foreground">{deadline.title}</p>
                              <p className="text-xs text-muted-foreground">{deadline.course} • {deadline.date}</p>
                            </div>
                          </div>
                          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                            deadline.daysLeft <= 5 
                              ? 'bg-red-100 text-red-700' 
                              : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {deadline.daysLeft} days
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
