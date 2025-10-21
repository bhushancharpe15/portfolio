'use client'

import { Mail, Phone, Linkedin, Github, Instagram } from 'lucide-react'

export function ContactBar() {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-3 text-sm text-gray-600">
          {/* Email */}
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-blue-600" />
            <a 
              href="mailto:bhushancharpe135@gmail.com" 
              className="hover:text-blue-600 transition-colors"
            >
              bhushancharpe135@gmail.com
            </a>
          </div>
          
          {/* Separator */}
          <span className="mx-4 text-gray-400">•</span>
          
          {/* Phone */}
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-green-600" />
            <a 
              href="tel:+918767106500" 
              className="hover:text-green-600 transition-colors"
            >
              +91 8767106500
            </a>
          </div>
          
          {/* Separator */}
          <span className="mx-4 text-gray-400">•</span>
          
          {/* LinkedIn */}
          <div className="flex items-center gap-2">
            <Linkedin className="w-4 h-4 text-blue-700" />
            <a 
              href="https://linkedin.com/in/bhushancharpe" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition-colors"
            >
              LinkedIn
            </a>
          </div>
          
          {/* Separator */}
          <span className="mx-4 text-gray-400">•</span>
          
          {/* Instagram */}
          <div className="flex items-center gap-2">
            <Instagram className="w-4 h-4 text-pink-600" />
            <a 
              href="https://www.instagram.com/bhushn.15?igsh=MWhmdDlxYjd0MGJ5bQ==" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-600 transition-colors"
            >
              Instagram
            </a>
          </div>
          
          {/* Separator */}
          <span className="mx-4 text-gray-400">•</span>
          
          {/* GitHub */}
          <div className="flex items-center gap-2">
            <Github className="w-4 h-4 text-gray-700" />
            <a 
              href="https://github.com/bhushancharpe15" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
