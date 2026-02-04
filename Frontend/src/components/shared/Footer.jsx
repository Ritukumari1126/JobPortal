import React from "react"
import { Briefcase, Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 text-white text-xl font-semibold">
            <Briefcase className="h-6 w-6 text-indigo-500" />
            JobPortal
          </div>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Your trusted platform to discover jobs, connect with top companies,
            and build a successful career.
          </p>
        </div>

        {/* For Candidates */}
        <div>
          <h3 className="text-white font-semibold mb-4">For Candidates</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Browse Jobs</li>
            <li className="hover:text-white cursor-pointer">Saved Jobs</li>
            <li className="hover:text-white cursor-pointer">Applied Jobs</li>
            <li className="hover:text-white cursor-pointer">Career Advice</li>
          </ul>
        </div>

        {/* For Employers */}
        <div>
          <h3 className="text-white font-semibold mb-4">For Employers</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Post a Job</li>
            <li className="hover:text-white cursor-pointer">Search Candidates</li>
            <li className="hover:text-white cursor-pointer">Pricing Plans</li>
            <li className="hover:text-white cursor-pointer">Recruitment Solutions</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-indigo-400" />
              support@jobportal.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-indigo-400" />
              +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-indigo-400" />
              Bangalore, India
            </li>
          </ul>

          {/* Social */}
          <div className="flex gap-4 mt-5">
            <Linkedin className="h-5 w-5 cursor-pointer hover:text-white" />
            <Github className="h-5 w-5 cursor-pointer hover:text-white" />
            <Twitter className="h-5 w-5 cursor-pointer hover:text-white" />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} JobPortal. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
