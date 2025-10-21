'use client'

import { motion } from 'framer-motion'
import { Award, Brain, Code, Rocket, Database, Zap } from 'lucide-react'

const skills = [
  {
    category: 'Programming Languages',
    items: ['Python', 'JavaScript', 'C', 'SQL', 'Bash Scripting'],
    icon: Code,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    category: 'ML & Deep Learning',
    items: ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'EfficientNet', 'Transfer Learning'],
    icon: Brain,
    color: 'from-purple-500 to-pink-500'
  },
  {
    category: 'Computer Vision',
    items: ['OpenCV', 'Mediapipe', 'CNNs', 'RNNs', 'Image Processing'],
    icon: Zap,
    color: 'from-green-500 to-emerald-500'
  },
  {
    category: 'Web & Cloud',
    items: ['Flask', 'FastAPI', 'Docker', 'AWS EC2', 'Google Cloud', 'REST APIs'],
    icon: Rocket,
    color: 'from-orange-500 to-red-500'
  },
  {
    category: 'Data & Tools',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Git', 'Jupyter'],
    icon: Database,
    color: 'from-indigo-500 to-purple-500'
  }
]

const publications = [
  {
    title: 'Forest Fire Detection using EfficientNetV2',
    year: '2024',
    description: 'Research paper on ML-based forest fire detection',
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Optimizing Energy Efficiency in Modern Buildings',
    year: '2025',
    description: 'IoT and Machine Learning for building optimization',
    color: 'from-green-500 to-emerald-500'
  }
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-indigo-50/30 to-white overflow-hidden min-h-screen">
      {/* Unique background pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(99, 102, 241, 0.15) 2%, transparent 0%), 
                           radial-gradient(circle at 75px 75px, rgba(147, 51, 234, 0.15) 2%, transparent 0%)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header - Completely New Style */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative inline-block"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              About <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mt-6"
          >
            Passionate about building AI solutions that make a real impact
          </motion.p>
        </div>

        {/* Story Section - Full Width */}
        <div className="mb-16">
          {/* My Story - Full Width */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                My Story
              </h3>
              
              <div className="space-y-5 text-base text-gray-700 leading-relaxed">
                <p>
                  Hey there! I&apos;m <span className="font-semibold text-blue-600">Bhushan Charpe</span>, a Computer Engineering student 
                  at <span className="font-semibold text-purple-600">Vishwakarma University, Pune</span>, passionate about 
                  Machine Learning, Deep Learning, and Computer Vision.
                </p>

                <p>
                  Currently pursuing B.Tech with <span className="font-semibold text-green-600">CGPA: 8.0</span>, I&apos;ve worked on 
                  cutting-edge projects from IoT device identification to emotion detection systems. My Forest Fire Detection System 
                  earned the <span className="font-semibold text-blue-600">Best Project Award</span> at Binghamton University competition.
                </p>

                <p>
                  Through internships at <span className="font-semibold text-blue-600">Reinvent Design Technologies</span>, 
                  <span className="font-semibold text-purple-600"> Binghamton University</span>, and <span className="font-semibold text-green-600">iNeuron Intelligence</span>, 
                  I&apos;ve sharpened my skills in building real-world ML applications and deploying them at scale.
                </p>

                <p>
                  I specialize in developing AI solutions that solve real-world problems, from computer vision applications 
                  to machine learning models for healthcare and environmental monitoring. My work focuses on creating 
                  efficient, scalable systems that can be deployed in production environments.
                </p>

                <p>
                  When I&apos;m not coding, you&apos;ll find me exploring the latest research papers in AI/ML, 
                  contributing to open-source projects, or working on side projects that push the boundaries 
                  of what&apos;s possible with machine learning technology.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 flex items-center gap-4 flex-wrap">
                  <span className="flex items-center gap-2">
                    <span className="text-lg">📍</span>
                    <span>Pune, Maharashtra</span>
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="flex items-center gap-2">
                    <span className="text-lg">🎓</span>
                    <span>Class of 2027</span>
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="flex items-center gap-2">
                    <span className="text-lg">💼</span>
                    <span>3 Internships</span>
                  </span>
                </p>
              </div>
            </div>

            {/* Publications - New Card Style */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
                Publications
              </h3>
              
              <div className="space-y-4">
                {publications.map((pub, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-6 pb-4 border-l-2 border-gray-200 last:border-0 last:pb-0"
                  >
                    <div className={`absolute left-0 top-0 w-3 h-3 rounded-full bg-gradient-to-r ${pub.color} transform -translate-x-[7px]`}></div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{pub.title}</h4>
                        <p className="text-sm text-gray-600">{pub.description}</p>
                      </div>
                      <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{pub.year}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Major Achievements Section - As shown in image */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full"></div>
                Major Achievements
              </h3>
              
              <div className="space-y-4">
                {/* Hackathon Winner Achievement */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                      <span className="text-white text-xl">🏆</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-lg mb-1">AI/ML Fusion National Hackathon Winner</h4>
                      <p className="text-yellow-100 text-sm">Won 10K cash prize, trip to Malvan, and Reliance goodies</p>
                    </div>
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  </div>
                </motion.div>

                {/* Best Project Award Achievement */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-gray-800 rounded-2xl p-6 shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <span className="text-white text-xl">🏆</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-lg mb-1">Best Project Award</h4>
                      <p className="text-gray-300 text-sm">Vishwakarma University for Forest Fire Detection System</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section - Full Width Below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
            Skills
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg">{skill.category}</h4>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="px-3 py-2 text-sm font-medium bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200 hover:scale-105"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Row - Completely New Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '7+', label: 'Projects', icon: '🚀', color: 'from-blue-500 to-cyan-500' },
            { number: '8.0', label: 'CGPA', icon: '🎓', color: 'from-purple-500 to-pink-500' },
            { number: '3', label: 'Internships', icon: '💼', color: 'from-green-500 to-emerald-500' },
            { number: '2', label: 'Publications', icon: '📄', color: 'from-orange-500 to-red-500' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-gray-600">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}