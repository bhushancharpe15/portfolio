'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Project } from '@/types'
import { projects as hardcodedProjects } from '@/data/projects'
import { ProjectCard } from './ProjectCard'
import { Search, Filter, Zap, Trophy, Brain, Code, Globe } from 'lucide-react'

export function ProjectShowcase() {
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState<string>('')

  const projectTypes = useMemo(() => {
    const types = new Set<string>()
    hardcodedProjects.forEach(p => types.add(p.projectType))
    return ['all', ...Array.from(types)].map(type => {
      const typeConfig = {
        'all': { label: 'All', icon: Filter, color: 'from-blue-500 to-purple-500' },
        'hackathon-winner': { label: 'Hackathon Winners', icon: Trophy, color: 'from-yellow-500 to-orange-500' },
        'machine-learning': { label: 'Machine Learning', icon: Brain, color: 'from-purple-500 to-pink-500' },
        'computer-vision': { label: 'Computer Vision', icon: Zap, color: 'from-blue-500 to-cyan-500' },
        'web-development': { label: 'Web Development', icon: Code, color: 'from-green-500 to-emerald-500' }
      }
      
      return {
        value: type,
        ...typeConfig[type as keyof typeof typeConfig] || { label: type, icon: Globe, color: 'from-gray-500 to-gray-600' }
      }
    })
  }, [])

  const filteredProjects = useMemo(() => {
    let filtered = hardcodedProjects

    if (activeFilter !== 'all') {
      filtered = filtered.filter(p => p.projectType === activeFilter)
    }

    if (searchTerm) {
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (typeof p.description === 'string' && p.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
        p.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }
    return filtered
  }, [activeFilter, searchTerm])

  const stats = useMemo(() => {
    const totalProjects = hardcodedProjects.length
    const hackathonWins = hardcodedProjects.filter(p => p.isHackathon).length
    const mlProjects = hardcodedProjects.filter(p => 
      p.projectType === 'machine-learning' || p.projectType === 'computer-vision'
    ).length
    const webProjects = hardcodedProjects.filter(p => p.projectType === 'web-development').length

    return { totalProjects, hackathonWins, mlProjects, webProjects }
  }, [])

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-purple-50/30 to-white overflow-hidden min-h-screen">
      {/* Diagonal Stripes Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 80px,
            rgba(147, 51, 234, 0.1) 80px,
            rgba(147, 51, 234, 0.1) 160px
          )`
        }}></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header - New Style */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative inline-block"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              My <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mt-6"
          >
            Innovative AI & ML solutions that make a real impact
          </motion.p>
        </div>

        {/* Stats Bar - Horizontal Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 flex flex-wrap justify-around gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-1">{stats.totalProjects}</div>
              <div className="text-sm text-gray-600 font-medium">Total Projects</div>
            </div>
            <div className="h-12 w-px bg-gray-300 hidden md:block"></div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-1">{stats.hackathonWins}</div>
              <div className="text-sm text-gray-600 font-medium">Award Winners</div>
            </div>
            <div className="h-12 w-px bg-gray-300 hidden md:block"></div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">{stats.mlProjects}</div>
              <div className="text-sm text-gray-600 font-medium">ML/AI Projects</div>
            </div>
            <div className="h-12 w-px bg-gray-300 hidden md:block"></div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-1">{stats.webProjects}</div>
              <div className="text-sm text-gray-600 font-medium">Web Projects</div>
            </div>
          </div>
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-12">
          {/* Compact Filter Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {projectTypes.map((type) => (
              <button
                key={type.value}
                onClick={() => setActiveFilter(type.value)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center gap-2 text-sm cursor-pointer ${
                  activeFilter === type.value
                    ? `bg-gradient-to-r ${type.color} text-white shadow-lg scale-105`
                    : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md border border-gray-200'
                }`}
              >
                <type.icon className="w-4 h-4" />
                <span>{type.label}</span>
                {type.value !== 'all' && (
                  <span className={`ml-1 px-2 py-0.5 text-xs rounded-full ${
                    activeFilter === type.value ? 'bg-white/20' : 'bg-gray-100'
                  }`}>
                    {hardcodedProjects.filter(p => p.projectType === type.value).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Search Bar - More compact */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/80 border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project._id}
                project={project}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="space-y-6">
              <div className="w-32 h-32 mx-auto bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                <Search className="w-16 h-16 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">No projects found</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Try adjusting your search or filter
              </p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setActiveFilter('all')
                }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-pink-600 hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg"
              >
                Show All Projects
              </button>
            </div>
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <div className="inline-block bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 shadow-lg border border-gray-200 max-w-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to collaborate?</h3>
            <p className="text-gray-600 mb-6">
              I&apos;m always excited to work on innovative projects!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:bhushancharpe135@gmail.com"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-2xl hover:from-blue-600 hover:to-purple-600 hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg"
              >
                Let&apos;s Connect
              </a>
              <a
                href="https://github.com/bhushancharpe15"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-2xl hover:bg-gray-50 hover:border-purple-400 hover:text-purple-600 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                View GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
