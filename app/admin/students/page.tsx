import { Users, Mail, GraduationCap } from "lucide-react"

export default function StudentsPage() {

  const students = [

    {
      name: "Alice Johnson",
      email: "alice@gmail.com",
      department: "Computer Science",
    },

    {
      name: "John Doe",
      email: "john@gmail.com",
      department: "Mechanical",
    },

    {
      name: "Rahul",
      email: "rahul@gmail.com",
      department: "BCA",
    },

  ]

  return (

    <div className="min-h-screen bg-gray-100 p-8">

      <div className="flex items-center justify-between mb-8">

        <div>

          <h1 className="text-4xl font-bold">
            Students Management
          </h1>

          <p className="text-gray-500 mt-2">
            Manage all registered students
          </p>

        </div>

      </div>

      <div className="grid gap-6">

        {students.map((student, index) => (

          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg p-6 flex items-center justify-between"
          >

            <div className="flex items-center gap-5">

              <div className="bg-blue-100 p-4 rounded-2xl">

                <Users className="text-blue-600" />

              </div>

              <div>

                <h2 className="text-xl font-bold">
                  {student.name}
                </h2>

                <div className="flex items-center gap-2 text-gray-500 mt-1">

                  <Mail className="h-4 w-4" />

                  <span>{student.email}</span>

                </div>

                <div className="flex items-center gap-2 text-gray-500 mt-1">

                  <GraduationCap className="h-4 w-4" />

                  <span>{student.department}</span>

                </div>

              </div>

            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl">
              View
            </button>

          </div>

        ))}

      </div>

    </div>

  )

}