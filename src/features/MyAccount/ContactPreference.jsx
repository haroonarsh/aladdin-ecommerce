'use client'

import { useState } from 'react'
import { Bell, Mail, Phone, MessageSquare } from 'lucide-react'
import ToggleSwitch from './ToggleSwitch'

export default function ContactPreference() {
    const [preferences, setPreferences] = useState({
        emailNotifications: true,
        smsNotifications: false,
        pushNotifications: true,
        marketingEmails: false,
        orderUpdates: true,
        newsletterSubscription: true,
        productRecommendations: false,
    })

    const handleToggle = (key) => {
        setPreferences(prev => ({ ...prev, [key]: !prev[key] }))
    }

    return (
        <div className="w-full mx-auto md:p-6 p-2">
            <h1 className="md:text-2xl text-xl font-semibold text-cyan-800 mb-8">Contact Preferences</h1>

            <div className="bg-cyan-800 rounded-lg md:p-6 p-2">
                <h2 className="lg:text-xl md:text-lg text-md font-semibold text-white mb-6">Notification Settings</h2>

                <div className="md:space-y-6 space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Mail className="text-teal-200 md:mr-3 sm:mr-2 mr-1" size={22} />
                            <span className="text-white md:text-[16px] text-sm">Email Notifications</span>
                        </div>
                        <ToggleSwitch
                            enabled={preferences.emailNotifications}
                            onChange={() => handleToggle('emailNotifications')}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Phone className="text-teal-200 md:mr-3 sm:mr-2 mr-1" size={22} />
                            <span className="text-white md:text-[16px] text-sm">SMS Notifications</span>
                        </div>
                        <ToggleSwitch
                            enabled={preferences.smsNotifications}
                            onChange={() => handleToggle('smsNotifications')}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Bell className="text-teal-200 md:mr-3 sm:mr-2 mr-1" size={22} />
                            <span className="text-white md:text-[16px] text-sm">Push Notifications</span>
                        </div>
                        <ToggleSwitch
                            enabled={preferences.pushNotifications}
                            onChange={() => handleToggle('pushNotifications')}
                        />
                    </div>
                </div>

                <h2 className="lg:text-xl md:text-lg text-md font-semibold text-white mt-10 mb-6">Email Preferences</h2>

                <div className="space-y-4">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={preferences.marketingEmails}
                            onChange={() => handleToggle('marketingEmails')}
                            className="form-checkbox md:h-5 sm:h-4 h-3 md:w-5 sm:w-4 w-3 text-teal-600 rounded focus:ring-teal-700 border-gray-600 bg-primaryMedium"
                        />
                        <span className="md:ml-3 ml-1 md:text-[16px] text-sm text-white">Marketing Emails</span>
                    </label>

                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={preferences.orderUpdates}
                            onChange={() => handleToggle('orderUpdates')}
                            className="form-checkbox md:h-5 sm:h-4 h-3 md:w-5 sm:w-4 w-3 text-teal-600 rounded focus:ring-teal-500 border-gray-600 bg-gray-700"
                        />
                        <span className="md:ml-3 ml-1 md:text-[16px] text-sm text-white">Order Updates</span>
                    </label>

                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={preferences.newsletterSubscription}
                            onChange={() => handleToggle('newsletterSubscription')}
                            className="form-checkbox md:h-5 sm:h-4 h-3 md:w-5 sm:w-4 w-3 text-teal-600 rounded focus:ring-teal-500 border-gray-600 bg-gray-700"
                        />
                        <span className="md:ml-3 ml-1 md:text-[16px] text-sm text-white">Newsletter Subscription</span>
                    </label>

                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={preferences.productRecommendations}
                            onChange={() => handleToggle('productRecommendations')}
                            className="form-checkbox md:h-5 sm:h-4 h-3 md:w-5 sm:w-4 w-3 text-teal-600 rounded focus:ring-teal-500 border-gray-600 bg-gray-700"
                        />
                        <span className="md:ml-3 ml-1 md:text-[16px] text-sm text-white">Product Recommendations</span>
                    </label>
                </div>

                <div className="mt-10">
                    <h2 className="lg:text-xl md:text-lg text-md font-semibold text-white mb-4">Communication Channels</h2>
                    <p className="text-gray-200 mb-4 md:text-[16px] text-sm">Select your preferred method of communication:</p>
                    <select
                        className="w-full bg-cyan-700 outline-none border border-none text-white rounded-md sm:py-2 py-1 sm:px-3 px-2 focus:ring-2 focus:ring-none"
                    >
                        <option value="email">Email</option>
                        <option value="sms">SMS</option>
                        <option value="push">Push Notification</option>
                        <option value="inApp">In-App Message</option>
                    </select>
                </div>

                <div className="mt-10 flex justify-end">
                    <button className="md:px-6 px-3 md:py-2 py-1 md:text-[16px] text-sm bg-cyan-700 text-white rounded-md hover:bg-cyan-600 transition-colors">
                        Save Preferences
                    </button>
                </div>
            </div>
        </div>
    )
}
