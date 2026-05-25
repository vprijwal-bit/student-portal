import { Settings } from "lucide-react"

export default function SettingsPage() {

  return (

    <div className="min-h-screen bg-gray-100 p-8">

      <div className="bg-white rounded-3xl shadow-lg p-10 max-w-3xl mx-auto">

        <div className="flex items-center gap-4 mb-8">

          <div className="bg-blue-100 p-4 rounded-xl">

            <Settings className="text-blue-600" />

          </div>

          <h1 className="text-4xl font-bold">
            Settings
          </h1>

        </div>

        <div className="space-y-6">

          <div className="bg-gray-100 p-5 rounded-xl">

            <h2 className="text-xl font-semibold">
              Change Password
            </h2>

            <p className="text-gray-500">
              Update your account password.
            </p>

          </div>

          <div className="bg-gray-100 p-5 rounded-xl">

            <h2 className="text-xl font-semibold">
              Notifications
            </h2>

            <p className="text-gray-500">
              Manage email notifications.
            </p>

          </div>

          <div className="bg-gray-100 p-5 rounded-xl">

            <h2 className="text-xl font-semibold">
              Privacy Settings
            </h2>

            <p className="text-gray-500">
              Manage profile visibility.
            </p>

          </div>

        </div>

      </div>

    </div>

  )

}