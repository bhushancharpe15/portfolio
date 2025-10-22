'use client'

import { Calendar, MapPin, Building2, Code, Brain, ArrowRight, Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'iNeuron Intelligence Pvt Ltd',
    role: 'Deep Learning Project Intern',
    type: 'Online',
    location: 'Remote',
    duration: 'November 2024 – Present',
    status: 'Active',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'from-purple-50 to-pink-50',
    icon: Brain,
    description: [
      'Developing an Automatic Car Parking System application using advanced deep learning techniques.',
      'Utilizing APIs and OPS pipeline for efficient model building and deployment.',
      'Implementing real-time inference systems for automated parking management.'
    ],
    technologies: ['Deep Learning', 'APIs', 'OPS Pipeline', 'Real-time Systems', 'Python', 'Model Deployment']
  },
  {
    company: 'Binghamton University x VU',
    role: 'Research Intern',
    type: 'On-Site',
    location: 'Pune',
    duration: 'August 2024 – December 2024',
    status: 'Completed',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'from-green-50 to-emerald-50',
    icon: Code,
    description: [
      'Detected diseases in oranges using advanced machine learning algorithms achieving high accuracy.',
      'Created comprehensive dataset of 12,000+ orange images manually with proper annotations.',
      'Worked on research project that combines agricultural science with machine learning for disease detection.'
    ],
    technologies: ['Machine Learning', 'Dataset Creation', 'Image Classification', 'Research', 'Orange Disease Detection', 'Python']
  },
  {
    company: 'Reinvent Design Technologies LLP',
    role: 'Intern',
    type: 'On-Site',
    location: 'Pune',
    duration: 'July 2024 – October 2024',
    status: 'Completed',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-50 to-cyan-50',
    icon: Building2,
    description: [
      'Simulated complex building projects on IES-VE software for energy efficiency analysis.',
      'Simulated apartment plans using Flucs daylight model on IES-VE for optimal lighting design.',
      'Processed and simulated building plans on Suncast model for solar analysis and optimization.'
    ],
    technologies: ['IES-VE Software', 'Building Simulation', 'Flucs Model', 'Suncast Model', 'Energy Analysis', 'Technical Documentation']
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-blue-50 overflow-hidden min-h-screen">
      {/* Unique Grid Pattern Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header - New Design */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative inline-block"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              My <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mt-6"
          >
            Professional journey building real-world AI solutions
          </motion.p>
        </div>

        {/* NEW CARD-BASED LAYOUT - No Timeline */}
        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className={`relative bg-gradient-to-br ${exp.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200`}>
                {/* Top Row: Icon, Company, Status */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${exp.color} shadow-lg`}>
                      <exp.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-lg font-semibold text-gray-700">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className={`px-4 py-2 rounded-full text-sm font-bold ${
                    exp.status === 'Active' 
                      ? 'bg-green-100 text-green-700 border-2 border-green-300' 
                      : 'bg-gray-100 text-gray-700 border-2 border-gray-300'
                  }`}>
                    {exp.status}
                  </div>
                </div>

                {/* Info Row */}
                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2 bg-white/60 px-3 py-1.5 rounded-lg">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/60 px-3 py-1.5 rounded-lg">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location} • {exp.type}</span>
                  </div>
                </div>

                {/* Description */}
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-6">
                  <ul className="space-y-3">
                    {exp.description.map((desc, descIndex) => (
                      <li
                        key={descIndex}
                        className="text-gray-700 leading-relaxed flex items-start gap-3"
                      >
                        <ArrowRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 text-xs font-medium bg-white/80 text-gray-700 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Decorative Corner */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${exp.color} opacity-10 rounded-tr-3xl rounded-bl-full`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 shadow-lg border border-gray-200 max-w-2xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Briefcase className="w-8 h-8 text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-900">Let&apos;s Work Together</h3>
            </div>
            <p className="text-gray-600 mb-6">
              I&apos;m always excited to take on new challenges and create amazing solutions
            </p>
            <a
              href="mailto:bhushancharpe135@gmail.com"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-2xl hover:from-blue-600 hover:to-purple-600 hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
