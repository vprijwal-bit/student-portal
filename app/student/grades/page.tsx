import { Award } from "lucide-react"

export default function GradesPage() {

  const grades = [

    {
      subject: "Machine Learning",
      grade: "A"
    },

    {
      subject: "Database Systems",
      grade: "B+"
    },

    {
      subject: "Software Engineering",
      grade: "A-"
    },

  ]

  return (

    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        Academic Grades
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {grades.map((item, index) => (

          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6"
          >

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-4">

                <div className="bg-blue-100 p-4 rounded-xl">

                  <Award className="text-blue-600" />

                </div>

                <div>

                  <h2 className="text-xl font-bold">
                    {item.subject}
                  </h2>

                  <p className="text-gray-500">
                    Semester Result
                  </p>

                </div>

              </div>

              <span className="text-3xl font-bold text-blue-600">
                {item.grade}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>

  )

}