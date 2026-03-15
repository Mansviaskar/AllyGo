import { useState } from 'react';
import { Card, Button, Badge, Avatar } from '../../components/ui';
import { User, Mail, Phone, MapPin, GraduationCap, Settings as SettingsIcon, Bell, Shield, CreditCard, Eye, EyeOff } from 'lucide-react';

export default function Settings() {
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    marketing: false
  });
  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    showEmail: false,
    showPhone: false
  });

  const handleNotificationChange = (key: string) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key as keyof typeof prev] }));
  };

  const handlePrivacyChange = (key: string) => {
    setPrivacy(prev => ({ ...prev, [key]: !prev[key as keyof typeof prev] }));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">
          Settings
        </h1>
        <p className="text-gray-400">
          Manage your account preferences and privacy settings
        </p>
      </div>

      {/* Profile Settings */}
      <Card>
        <div className="flex items-center gap-3 mb-6">
          <User className="w-5 h-5 text-orange-500" />
          <h2 className="text-xl font-semibold text-white">
            Profile Information
          </h2>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Avatar name="John Doe" size="xl" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white">John Doe</h3>
              <p className="text-gray-400">Computer Science Student</p>
              <Badge variant="success" className="mt-1">Verified</Badge>
            </div>
            <Button variant="outline">
              Change Photo
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Full Name
              </label>
              <input 
                type="text" 
                defaultValue="John Doe"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:border-orange-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Email
              </label>
              <input 
                type="email" 
                defaultValue="john.doe@university.edu"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:border-orange-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Phone
              </label>
              <input 
                type="tel" 
                defaultValue="+1 (555) 123-4567"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:border-orange-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                University
              </label>
              <input 
                type="text" 
                defaultValue="Tech University"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:border-orange-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Course
              </label>
              <input 
                type="text" 
                defaultValue="Computer Science"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:border-orange-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Year of Graduation
              </label>
              <input 
                type="number" 
                defaultValue="2025"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:border-orange-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Bio
            </label>
            <textarea 
              rows={3}
              defaultValue="Passionate computer science student interested in web development and AI. Looking to collaborate on projects and help fellow students."
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:border-orange-500 focus:outline-none resize-none"
            />
          </div>

          <div className="flex justify-end">
            <Button variant="primary">
              Save Changes
            </Button>
          </div>
        </div>
      </Card>

      {/* Security Settings */}
      <Card>
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-5 h-5 text-orange-500" />
          <h2 className="text-xl font-semibold text-white">
            Security
          </h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Current Password
            </label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"}
                placeholder="Enter current password"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 pr-10 text-white focus:border-orange-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                New Password
              </label>
              <input 
                type="password" 
                placeholder="Enter new password"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:border-orange-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Confirm Password
              </label>
              <input 
                type="password" 
                placeholder="Confirm new password"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:border-orange-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <Button variant="primary">
              Update Password
            </Button>
          </div>
        </div>
      </Card>

      {/* Notification Settings */}
      <Card>
        <div className="flex items-center gap-3 mb-6">
          <Bell className="w-5 h-5 text-orange-500" />
          <h2 className="text-xl font-semibold text-white">
            Notifications
          </h2>
        </div>

        <div className="space-y-4">
          {[
            { key: 'email', label: 'Email Notifications', desc: 'Receive notifications via email' },
            { key: 'push', label: 'Push Notifications', desc: 'Receive push notifications in browser' },
            { key: 'sms', label: 'SMS Notifications', desc: 'Receive notifications via SMS' },
            { key: 'marketing', label: 'Marketing Emails', desc: 'Receive promotional emails and updates' }
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between py-3 border-b border-gray-800 last:border-b-0">
              <div>
                <h3 className="text-white font-medium">{item.label}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
              <button
                onClick={() => handleNotificationChange(item.key)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  notifications[item.key as keyof typeof notifications] ? 'bg-orange-500' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notifications[item.key as keyof typeof notifications] ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </Card>

      {/* Privacy Settings */}
      <Card>
        <div className="flex items-center gap-3 mb-6">
          <Eye className="w-5 h-5 text-orange-500" />
          <h2 className="text-xl font-semibold text-white">
            Privacy
          </h2>
        </div>

        <div className="space-y-4">
          {[
            { key: 'profileVisible', label: 'Profile Visibility', desc: 'Make your profile visible to other students' },
            { key: 'showEmail', label: 'Show Email', desc: 'Display your email on your public profile' },
            { key: 'showPhone', label: 'Show Phone', desc: 'Display your phone number on your public profile' }
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between py-3 border-b border-gray-800 last:border-b-0">
              <div>
                <h3 className="text-white font-medium">{item.label}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
              <button
                onClick={() => handlePrivacyChange(item.key)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  privacy[item.key as keyof typeof privacy] ? 'bg-orange-500' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    privacy[item.key as keyof typeof privacy] ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </Card>

      {/* Account Actions */}
      <Card>
        <div className="flex items-center gap-3 mb-6">
          <SettingsIcon className="w-5 h-5 text-orange-500" />
          <h2 className="text-xl font-semibold text-white">
            Account Actions
          </h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-gray-800">
            <div>
              <h3 className="text-white font-medium">Export Data</h3>
              <p className="text-sm text-gray-400">Download a copy of your account data</p>
            </div>
            <Button variant="outline" size="sm">
              Download
            </Button>
          </div>
          
          <div className="flex items-center justify-between py-3 border-b border-gray-800">
            <div>
              <h3 className="text-white font-medium">Deactivate Account</h3>
              <p className="text-sm text-gray-400">Temporarily disable your account</p>
            </div>
            <Button variant="outline" size="sm">
              Deactivate
            </Button>
          </div>
          
          <div className="flex items-center justify-between py-3">
            <div>
              <h3 className="text-red-400 font-medium">Delete Account</h3>
              <p className="text-sm text-gray-400">Permanently delete your account and all data</p>
            </div>
            <Button variant="outline" size="sm" className="text-red-400 border-red-400 hover:bg-red-400 hover:text-white">
              Delete
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}