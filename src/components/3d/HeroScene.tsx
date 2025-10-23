'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, Instagram } from 'lucide-react'

// Main Hero Scene component - Unique Design without 3D objects
export function HeroScene() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-pink-50">
      {/* Always visible background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-pink-50" />
      
      {/* Unique animated wave patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient waves */}
        <motion.div 
          className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        
        <motion.div 
          className="absolute top-1/4 right-20 w-80 h-80 bg-gradient-to-br from-pink-300/20 to-orange-300/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        ></motion.div>
        
        <motion.div 
          className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-br from-cyan-300/15 to-blue-300/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.4, 1],
            x: [0, 60, 0],
            y: [0, -40, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        ></motion.div>

        {/* Floating squares and shapes - more unique */}
        {[...Array(8)].map((_, i) => {
          const shapes = ['rounded-lg', 'rounded-full', 'rounded-xl', 'rounded-2xl'];
          const shapeClass = shapes[i % shapes.length];
          const sizeClass = i % 2 === 0 ? 'w-4 h-4' : 'w-3 h-3';
          const colors = [
            'bg-gradient-to-br from-blue-400/40 to-purple-400/40',
            'bg-gradient-to-br from-pink-400/40 to-orange-400/40',
            'bg-gradient-to-br from-cyan-400/40 to-blue-400/40',
            'bg-gradient-to-br from-purple-400/40 to-pink-400/40'
          ];
          const colorClass = colors[i % colors.length];
          
          return (
            <motion.div
              key={i}
              className={`absolute ${sizeClass} ${colorClass} ${shapeClass}`}
              style={{
                left: `${15 + (i * 12) % 70}%`,
                top: `${15 + (i * 13) % 60}%`,
              }}
              animate={{
                y: [0, -60, 0],
                x: [0, Math.cos(i) * 30, 0],
                rotate: [0, 180, 360],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 5 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            />
          )
        })}

        {/* Diagonal lines for modern look */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-indigo-300/30 to-transparent"
            style={{
              left: '-10%',
              top: `${25 + i * 20}%`,
              width: '120%',
              transform: `rotate(${-15 + i * 2}deg)`,
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 3
            }}
          />
        ))}
      </div>

      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-auto relative z-30">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left side - Profile Photo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-shrink-0"
            >
              <div className="relative group">
                {/* Unique animated gradient border with hexagon effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full"
                  />
                </div>
                
                {/* Profile image container with unique border - Bigger and positioned up */}
                <div className="relative -mt-8 -ml-4">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full animate-pulse"></div>
                  <img 
                    src="./profileimg.jpg" 
                    alt="Bhushan Charpe"
                    className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-white shadow-2xl"
                  />
                  {/* Unique overlay on hover */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Name and Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="flex-1 text-left space-y-6"
            >
              {/* Name with gradient - keeping this design */}
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
                >
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                    BHUSHAN
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                    CHARPE
                  </span>
                </motion.h1>
              </div>

              {/* Subtitle with unique styling */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="space-y-3"
              >
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 font-semibold">
                  Machine Learning Engineer & Developer
                </p>
                <p className="text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed">
                  B.Tech in Computer Engineering at Vishwakarma University. 
                  Specializing in Deep Learning, Computer Vision, and AI-powered solutions.
                </p>
              </motion.div>

              {/* Achievements highlight - NEW ORDER */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-3"
              >
                {/* AI/ML Fusion Hackathon - FIRST PRIORITY */}
                <motion.div 
                  className="px-5 py-3 glass rounded-2xl border-2 border-yellow-400/60 bg-gradient-to-r from-yellow-100/80 to-orange-100/80 shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <p className="text-sm font-bold text-orange-700 flex items-center space-x-2">
                    <span>🏆</span>
                    <span>AI/ML Fusion Hackathon Winner</span>
                  </p>
                </motion.div>
                
                {/* Best Project Award - SECOND */}
                <motion.div 
                  className="px-5 py-3 glass rounded-2xl border-2 border-yellow-500/50 bg-yellow-100/70 shadow-md"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <p className="text-sm font-bold text-yellow-700 flex items-center space-x-2">
                    <span>⭐</span>
                    <span>Best Project Award</span>
                  </p>
                </motion.div>
                
                <motion.div 
                  className="px-5 py-3 glass rounded-2xl border-2 border-blue-500/40 bg-blue-100/60"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <p className="text-sm font-semibold text-blue-700 flex items-center space-x-2">
                    <span>🎓</span>
                    <span>CGPA: 8.0</span>
                  </p>
                </motion.div>
                
                <motion.div 
                  className="px-5 py-3 glass rounded-2xl border-2 border-purple-500/40 bg-purple-100/60"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <p className="text-sm font-semibold text-purple-700 flex items-center space-x-2">
                    <span>📄</span>
                    <span>2 Publications</span>
                  </p>
                </motion.div>
              </motion.div>

              {/* Contact info - Modern Clean Design */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-600"
              >
                <a 
                  href="mailto:bhushancharpe135@gmail.com" 
                  className="hover:text-blue-600 transition-colors cursor-pointer flex items-center gap-2 font-medium"
                >
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span>bhushancharpe135@gmail.com</span>
                </a>
                <span className="text-gray-400">•</span>
                <a 
                  href="tel:+918767106500" 
                  className="hover:text-green-600 transition-colors cursor-pointer flex items-center gap-2 font-medium"
                >
                  <Phone className="w-4 h-4 text-green-600" />
                  <span>+91 8767106500</span>
                </a>
                <span className="text-gray-400">•</span>
                <a 
                  href="https://linkedin.com/in/bhushancharpe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-700 transition-colors cursor-pointer flex items-center gap-2 font-medium"
                >
                  <Linkedin className="w-4 h-4 text-blue-700" />
                  <span>LinkedIn</span>
                </a>
                <span className="text-gray-400">•</span>
                <a 
                  href="https://www.instagram.com/bhushn.15?igsh=MWhmdDlxYjd0MGJ5bQ==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-pink-600 transition-colors cursor-pointer flex items-center gap-2 font-medium"
                >
                  <Instagram className="w-4 h-4 text-pink-600" />
                  <span>Instagram</span>
                </a>
                <span className="text-gray-400">•</span>
                <a 
                  href="https://github.com/bhushancharpe15" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-800 transition-colors cursor-pointer flex items-center gap-2 font-medium"
                >
                  <Github className="w-4 h-4 text-gray-700" />
                  <span>GitHub</span>
                </a>
              </motion.div>

              {/* Call to action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="flex flex-wrap gap-4 mt-2"
              >
                <a
                  href="#about"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-2xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center space-x-2 cursor-pointer"
                >
                  <span>About Me</span>
                  <span className="text-xl">→</span>
                </a>
                
                <a
                  href="#projects"
                  className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-2xl hover:border-purple-500 hover:text-purple-600 hover:bg-purple-50 hover:scale-105 transition-all duration-300 flex items-center space-x-2 cursor-pointer"
                >
                  <span>View Projects</span>
                </a>

                <a
                  href="./resume.pdf"
                  download="Bhushan_Charpe_Resume.pdf"
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-2xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center space-x-2 cursor-pointer"
                >
                  <span>📄 Resume</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Modern corner accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-8 w-20 h-20 border-t-4 border-l-4 border-blue-500/40 rounded-tl-2xl"></div>
        <div className="absolute top-8 right-8 w-20 h-20 border-t-4 border-r-4 border-purple-500/40 rounded-tr-2xl"></div>
        <div className="absolute bottom-8 left-8 w-20 h-20 border-b-4 border-l-4 border-cyan-500/40 rounded-bl-2xl"></div>
        <div className="absolute bottom-8 right-8 w-20 h-20 border-b-4 border-r-4 border-pink-500/40 rounded-br-2xl"></div>
      </div>
    </div>
  )
}
