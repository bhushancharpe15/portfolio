'use client'

import { Mail, Phone, Linkedin, Github, Instagram } from 'lucide-react'

export function ContactBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-3 text-xs sm:text-sm text-gray-600 flex-wrap gap-2 sm:gap-0">
          {/* Email */}
          <div className="flex items-center gap-1 sm:gap-2">
            <Mail className="w-4 h-4 text-blue-600" />
            <a 
              href="mailto:bhushancharpe135@gmail.com" 
              className="hover:text-blue-600 transition-colors"
            >
              <span className="hidden lg:inline">bhushancharpe135@gmail.com</span>
              <span className="lg:hidden">Email</span>
            </a>
          </div>
          
          {/* Separator */}
          <span className="mx-2 sm:mx-4 text-gray-400">•</span>
          
          {/* Phone */}
          <div className="flex items-center gap-1 sm:gap-2">
            <Phone className="w-4 h-4 text-green-600" />
            <a 
              href="tel:+918767106500" 
              className="hover:text-green-600 transition-colors"
            >
              +91 8767106500
            </a>
          </div>
          
          {/* Separator */}
          <span className="mx-2 sm:mx-4 text-gray-400">•</span>
          
          {/* LinkedIn */}
          <div className="flex items-center gap-1 sm:gap-2">
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
          
          {/* Separator - Hidden on small screens */}
          <span className="hidden sm:inline mx-2 sm:mx-4 text-gray-400">•</span>
          
          {/* Instagram - Hidden on small screens */}
          <div className="hidden sm:flex items-center gap-1 sm:gap-2">
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
          <span className="mx-2 sm:mx-4 text-gray-400">•</span>
          
          {/* GitHub */}
          <div className="flex items-center gap-1 sm:gap-2">
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



