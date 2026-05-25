import { CalendarDays } from "lucide-react"

export default function SchedulePage() {

  const schedules = [

    {
      day: "Monday",
      activity: "Machine Learning Class",
    },

    {
      day: "Tuesday",
      activity: "Database Lab",
    },

    {
      day: "Wednesday",
      activity: "Software Engineering",
    },

  ]

  return (

    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        Schedule Management
      </h1>

      <div className="space-y-6">

        {schedules.map((item, index) => (

          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg p-6 flex items-center gap-5"
          >

            <div className="bg-orange-100 p-4 rounded-2xl">

              <CalendarDays className="text-orange-600" />

            </div>

            <div>

              <h2 className="text-xl font-bold">
                {item.day}
              </h2>

              <p className="text-gray-500">
                {item.activity}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

  )

}