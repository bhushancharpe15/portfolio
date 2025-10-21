'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, MapPin, Instagram } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/bhushancharpe15',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/bhushancharpe',
      icon: Linkedin,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/bhushn.15?igsh=MWhmdDlxYjd0MGJ5bQ==',
      icon: Instagram,
    },
    {
      name: 'Email',
      href: 'mailto:bhushancharpe135@gmail.com',
      icon: Mail,
    },
    {
      name: 'Phone',
      href: 'tel:+918767106500',
      icon: Phone,
    },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact</h3>
            <div className="space-y-3 text-gray-600">
              <a href="mailto:bhushancharpe135@gmail.com" className="flex items-center hover:text-blue-600 transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                bhushancharpe135@gmail.com
              </a>
              <a href="tel:+918767106500" className="flex items-center hover:text-blue-600 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                +91 8767106500
              </a>
              <p className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Pune, Maharashtra
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['About', 'Projects', 'Experience'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ x: 5 }}
                  className="block text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors duration-200"
                  title={link.name}
                >
                  <link.icon className="w-5 h-5 text-gray-700 hover:text-blue-600" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © {currentYear} Bhushan Charpe. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span>Made with ❤️ using Next.js</span>
              <span>•</span>
              <span>B.Tech Computer Engineering</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
