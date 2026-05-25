import { Settings, Bell, Lock, UserCog } from "lucide-react"

export default function SettingsPage() {

  return (

    <div className="min-h-screen bg-gray-100 p-8">

      <div className="bg-white rounded-3xl shadow-lg p-10 max-w-4xl mx-auto">

        <div className="flex items-center gap-4 mb-10">

          <div className="bg-blue-100 p-4 rounded-2xl">

            <Settings className="text-blue-600 h-8 w-8" />

          </div>

          <div>

            <h1 className="text-4xl font-bold">
              Admin Settings
            </h1>

            <p className="text-gray-500">
              Manage system preferences
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-gray-100 rounded-2xl p-6">

            <div className="flex items-center gap-4 mb-3">

              <Bell className="text-blue-600" />

              <h2 className="text-xl font-bold">
                Notifications
              </h2>

            </div>

            <p className="text-gray-500">
              Manage admin notifications.
            </p>

          </div>

          <div className="bg-gray-100 rounded-2xl p-6">

            <div className="flex items-center gap-4 mb-3">

              <Lock className="text-blue-600" />

              <h2 className="text-xl font-bold">
                Security
              </h2>

            </div>

            <p className="text-gray-500">
              Update password and security.
            </p>

          </div>

          <div className="bg-gray-100 rounded-2xl p-6">

            <div className="flex items-center gap-4 mb-3">

              <UserCog className="text-blue-600" />

              <h2 className="text-xl font-bold">
                User Management
              </h2>

            </div>

            <p className="text-gray-500">
              Manage admin accounts.
            </p>

          </div>

        </div>

      </div>

    </div>

  )

}