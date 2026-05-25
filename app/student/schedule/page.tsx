import { CalendarDays } from "lucide-react"

export default function SchedulePage() {

  const schedule = [

    {
      day: "Monday",
      subject: "Machine Learning"
    },

    {
      day: "Tuesday",
      subject: "Database Systems"
    },

    {
      day: "Wednesday",
      subject: "Software Engineering"
    },

  ]

  return (

    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        Class Schedule
      </h1>

      <div className="space-y-5">

        {schedule.map((item, index) => (

          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg flex items-center gap-5"
          >

            <div className="bg-blue-100 p-4 rounded-xl">

              <CalendarDays className="text-blue-600" />

            </div>

            <div>

              <h2 className="text-xl font-bold">
                {item.day}
              </h2>

              <p className="text-gray-500">
                {item.subject}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

  )

}