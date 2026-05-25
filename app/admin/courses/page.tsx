import { BookOpen } from "lucide-react"

export default function CoursesPage() {

  const courses = [

    "Machine Learning",
    "Database Systems",
    "Cloud Computing",
    "Software Engineering",

  ]

  return (

    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        Courses Management
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {courses.map((course, index) => (

          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg p-6 hover:scale-105 transition-all"
          >

            <div className="flex items-center gap-5">

              <div className="bg-green-100 p-4 rounded-2xl">

                <BookOpen className="text-green-600" />

              </div>

              <div>

                <h2 className="text-xl font-bold">
                  {course}
                </h2>

                <p className="text-gray-500">
                  Active Course
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  )

}