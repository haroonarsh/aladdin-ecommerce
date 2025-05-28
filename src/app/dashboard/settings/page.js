"use client"

import { useState } from "react";
import Image from "next/image";
import { User, Lock, Bell, Globe, CreditCard, Shield, Eye, EyeOff, Save, Upload, Trash2, Plus } from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Form states
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    company: "Aladdin Inc.",
    website: "https://aladdin.com",
    bio: "E-commerce platform administrator with 5+ years of experience.",
    avatar: "/placeholder.svg?height=100&width=100",
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    orderUpdates: true,
    marketingEmails: false,
    securityAlerts: true,
    weeklyReports: true,
  });

  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah@aladdin.com",
      role: "Admin",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael@aladdin.com",
      role: "Manager",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Emily Davis",
      email: "emily@aladdin.com",
      role: "Editor",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]);

  const tabs = [
    { id: "profile", name: "Profile", icon: User },
    { id: "security", name: "Security", icon: Lock },
    { id: "notifications", name: "Notifications", icon: Bell },
    { id: "billing", name: "Billing", icon: CreditCard },
    { id: "team", name: "Team", icon: Shield },
    { id: "preferences", name: "Preferences", icon: Globe },
  ];

  const handleProfileUpdate = (field, value) => {
    setProfileData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNotificationToggle = (setting) => {
    setNotificationSettings((prev) => ({ ...prev, [setting]: !prev[setting] }));
  };

  const removeTeamMember = (id) => {
    setTeamMembers((prev) => prev.filter((member) => member.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col justify-between space-y-4 sm:flex-row sm:items-center sm:space-y-0">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <button className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500">
          <Save className="mr-2 h-4 w-4" />
          Save All Changes
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <nav className="space-y-1">
            {tabs.map((tab) => {
              const IconComponent = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex w-full items-center rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <IconComponent className="mr-3 h-5 w-5" />
                  {tab.name}
                </button>
              )
            })}
          </nav>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Profile Information</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Update your account profile information and email address.
                  </p>
                </div>

                {/* Avatar Upload */}
                <div className="flex items-center space-x-6">
                  <div className="shrink-0">
                    <Image
                      src={profileData.avatar || "/placeholder.svg"}
                      alt="Profile"
                      width={100}
                      height={100}
                      className="h-20 w-20 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                      <Upload className="mr-2 h-4 w-4" />
                      Change Avatar
                    </button>
                    <p className="mt-1 text-xs text-gray-500">JPG, GIF or PNG. 1MB max.</p>
                  </div>
                </div>

                {/* Profile Form */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                      type="text"
                      value={profileData.firstName}
                      onChange={(e) => handleProfileUpdate("firstName", e.target.value)}
                      className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                      type="text"
                      value={profileData.lastName}
                      onChange={(e) => handleProfileUpdate("lastName", e.target.value)}
                      className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => handleProfileUpdate("email", e.target.value)}
                      className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) => handleProfileUpdate("phone", e.target.value)}
                      className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Company</label>
                    <input
                      type="text"
                      value={profileData.company}
                      onChange={(e) => handleProfileUpdate("company", e.target.value)}
                      className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Website</label>
                    <input
                      type="url"
                      value={profileData.website}
                      onChange={(e) => handleProfileUpdate("website", e.target.value)}
                      className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Bio</label>
                  <textarea
                    rows={4}
                    value={profileData.bio}
                    onChange={(e) => handleProfileUpdate("bio", e.target.value)}
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Tell us about yourself..."
                  />
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === "security" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Security Settings</h3>
                  <p className="mt-1 text-sm text-gray-500">Manage your password and security preferences.</p>
                </div>

                {/* Change Password */}
                <div className="space-y-4">
                  <h4 className="text-md font-medium text-gray-900">Change Password</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Current Password</label>
                      <div className="relative mt-1">
                        <input
                          type={showCurrentPassword ? "text" : "password"}
                          value={passwordData.currentPassword}
                          onChange={(e) => setPasswordData((prev) => ({ ...prev, currentPassword: e.target.value }))}
                          className="w-full rounded-md border border-gray-300 px-3 py-2 pr-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                        <button
                          type="button"
                          onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                          className="absolute inset-y-0 right-0 flex items-center pr-3"
                        >
                          {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">New Password</label>
                      <div className="relative mt-1">
                        <input
                          type={showNewPassword ? "text" : "password"}
                          value={passwordData.newPassword}
                          onChange={(e) => setPasswordData((prev) => ({ ...prev, newPassword: e.target.value }))}
                          className="w-full rounded-md border border-gray-300 px-3 py-2 pr-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                        <button
                          type="button"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                          className="absolute inset-y-0 right-0 flex items-center pr-3"
                        >
                          {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                      <div className="relative mt-1">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          value={passwordData.confirmPassword}
                          onChange={(e) => setPasswordData((prev) => ({ ...prev, confirmPassword: e.target.value }))}
                          className="w-full rounded-md border border-gray-300 px-3 py-2 pr-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute inset-y-0 right-0 flex items-center pr-3"
                        >
                          {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                  </div>
                  <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                    Update Password
                  </button>
                </div>

                {/* Two-Factor Authentication */}
                <div className="border-t pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-md font-medium text-gray-900">Two-Factor Authentication</h4>
                      <p className="text-sm text-gray-500">Add an extra layer of security to your account.</p>
                    </div>
                    <button className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                      Enable 2FA
                    </button>
                  </div>
                </div>

                {/* Login Sessions */}
                <div className="border-t pt-6">
                  <h4 className="text-md font-medium text-gray-900">Active Sessions</h4>
                  <p className="text-sm text-gray-500">Manage your active login sessions.</p>
                  <div className="mt-4 space-y-3">
                    {[
                      { device: "MacBook Pro", location: "New York, NY", time: "Current session" },
                      { device: "iPhone 13", location: "New York, NY", time: "2 hours ago" },
                      { device: "Chrome Browser", location: "Los Angeles, CA", time: "1 day ago" },
                    ].map((session, index) => (
                      <div key={index} className="flex items-center justify-between rounded-lg border p-3">
                        <div>
                          <p className="text-sm font-medium text-gray-900">{session.device}</p>
                          <p className="text-xs text-gray-500">
                            {session.location} • {session.time}
                          </p>
                        </div>
                        {index !== 0 && <button className="text-sm text-red-600 hover:text-red-800">Revoke</button>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === "notifications" && (
  <div className="space-y-6">
    <div>
      <h3 className="text-lg font-medium text-gray-900">Notification Preferences</h3>
      <p className="mt-1 text-sm text-gray-500">Choose how you want to be notified about activity.</p>
    </div>

    <div className="space-y-4">
      {[
        {
          key: "emailNotifications",
          label: "Email Notifications",
          description: "Receive notifications via email",
        },
        {
          key: "pushNotifications",
          label: "Push Notifications",
          description: "Receive push notifications in your browser",
        },
        {
          key: "orderUpdates",
          label: "Order Updates",
          description: "Get notified about order status changes",
        },
        {
          key: "marketingEmails",
          label: "Marketing Emails",
          description: "Receive promotional emails and offers",
        },
        {
          key: "securityAlerts",
          label: "Security Alerts",
          description: "Get notified about security-related events",
        },
        { 
          key: "weeklyReports", 
          label: "Weekly Reports", 
          description: "Receive weekly analytics reports" 
        },
      ].map((setting) => (
        <div key={setting.key} className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-900">{setting.label}</p>
            <p className="text-sm text-gray-500">{setting.description}</p>
          </div>
          <label className="relative inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              checked={notificationSettings[setting.key]}
              onChange={() => handleNotificationToggle(setting.key)}
              className="sr-only"
            />
            <div
              className={`relative h-6 w-11 rounded-full transition-colors ${
                notificationSettings[setting.key]
                  ? "bg-blue-600"
                  : "bg-gray-200"
              }`}
            >
              <div
                className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform ${
                  notificationSettings[setting.key]
                    ? "translate-x-5"
                    : "translate-x-0"
                }`}
              />
            </div>
          </label>
        </div>
      ))}
    </div>
  </div>
)}

            {/* Billing Tab */}
            {activeTab === "billing" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Billing & Subscription</h3>
                  <p className="mt-1 text-sm text-gray-500">Manage your billing information and subscription.</p>
                </div>

                {/* Current Plan */}
                <div className="rounded-lg border border-gray-200 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">Pro Plan</h4>
                      <p className="text-sm text-gray-500">$29/month • Billed monthly</p>
                    </div>
                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                      Active
                    </span>
                  </div>
                  <div className="mt-4 flex space-x-3">
                    <button className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                      Change Plan
                    </button>
                    <button className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                      Cancel Subscription
                    </button>
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <h4 className="text-md font-medium text-gray-900">Payment Method</h4>
                  <div className="mt-3 rounded-lg border border-gray-200 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <CreditCard className="h-8 w-8 text-gray-400" />
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">•••• •••• •••• 4242</p>
                          <p className="text-sm text-gray-500">Expires 12/25</p>
                        </div>
                      </div>
                      <button className="text-sm text-blue-600 hover:text-blue-800">Update</button>
                    </div>
                  </div>
                </div>

                {/* Billing History */}
                <div>
                  <h4 className="text-md font-medium text-gray-900">Billing History</h4>
                  <div className="mt-3 space-y-3">
                    {[
                      { date: "Mar 1, 2024", amount: "$29.00", status: "Paid" },
                      { date: "Feb 1, 2024", amount: "$29.00", status: "Paid" },
                      { date: "Jan 1, 2024", amount: "$29.00", status: "Paid" },
                    ].map((invoice, index) => (
                      <div key={index} className="flex items-center justify-between rounded-lg border p-3">
                        <div>
                          <p className="text-sm font-medium text-gray-900">{invoice.date}</p>
                          <p className="text-sm text-gray-500">{invoice.amount}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                            {invoice.status}
                          </span>
                          <button className="text-sm text-blue-600 hover:text-blue-800">Download</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Team Tab */}
            {activeTab === "team" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Team Members</h3>
                    <p className="mt-1 text-sm text-gray-500">Manage your team members and their permissions.</p>
                  </div>
                  <button className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500">
                    <Plus className="mr-2 h-4 w-4" />
                    Invite Member
                  </button>
                </div>

                <div className="space-y-3">
                  {teamMembers.map((member) => (
                    <div key={member.id} className="flex items-center justify-between rounded-lg border p-4">
                      <div className="flex items-center">
                        <Image
                          src={member.avatar || "/placeholder.svg"}
                          alt={member.name}
                          width={40}
                          height={40}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">{member.name}</p>
                          <p className="text-sm text-gray-500">{member.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <select className="rounded-md border border-gray-300 py-1 pl-3 pr-8 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
                          <option value="admin">Admin</option>
                          <option value="manager">Manager</option>
                          <option value="editor">Editor</option>
                          <option value="viewer">Viewer</option>
                        </select>
                        <button onClick={() => removeTeamMember(member.id)} className="text-red-600 hover:text-red-800">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Preferences Tab */}
            {activeTab === "preferences" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Preferences</h3>
                  <p className="mt-1 text-sm text-gray-500">Customize your dashboard experience.</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Language</label>
                    <select className="mt-1 w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
                      <option>English (US)</option>
                      <option>English (UK)</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Timezone</label>
                    <select className="mt-1 w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
                      <option>Eastern Time (ET)</option>
                      <option>Central Time (CT)</option>
                      <option>Mountain Time (MT)</option>
                      <option>Pacific Time (PT)</option>
                      <option>UTC</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Date Format</label>
                    <select className="mt-1 w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
                      <option>MM/DD/YYYY</option>
                      <option>DD/MM/YYYY</option>
                      <option>YYYY-MM-DD</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Currency</label>
                    <select className="mt-1 w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
                      <option>USD ($)</option>
                      <option>EUR (€)</option>
                      <option>GBP (£)</option>
                      <option>JPY (¥)</option>
                    </select>
                  </div>
                </div>

                {/* Danger Zone */}
                <div className="border-t pt-6">
                  <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                    <h4 className="text-md font-medium text-red-900">Danger Zone</h4>
                    <p className="mt-1 text-sm text-red-700">These actions cannot be undone.</p>
                    <div className="mt-4 space-y-3">
                      <button className="rounded-md border border-red-300 bg-white px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-50">
                        Export Account Data
                      </button>
                      <button className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700">
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
