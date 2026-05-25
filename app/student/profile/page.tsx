import { User, Mail, Phone, MapPin } from "lucide-react"

export default function ProfilePage() {

  return (

    <div className="min-h-screen bg-gray-100 p-8">

      <div className="bg-white rounded-3xl shadow-lg p-10 max-w-3xl mx-auto">

        <div className="flex flex-col items-center">

          <div className="bg-blue-600 h-28 w-28 rounded-full flex items-center justify-center text-white text-4xl font-bold">
            AJ
          </div>

          <h1 className="text-3xl font-bold mt-4">
            Alice Johnson
          </h1>

          <p className="text-gray-500">
            Computer Science Student
          </p>

        </div>

        <div className="mt-10 space-y-5">

          <div className="flex items-center gap-4">
            <Mail className="text-blue-600" />
            <span>alice@gmail.com</span>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="text-blue-600" />
            <span>+91 9876543210</span>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="text-blue-600" />
            <span>Kochi, Kerala</span>
          </div>

        </div>

      </div>

    </div>

  )

}