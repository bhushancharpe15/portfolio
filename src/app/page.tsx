import { HeroScene } from '@/components/3d/HeroScene'
import { AboutSection } from '@/components/sections/AboutSection'
import { ProjectShowcase } from '@/components/projects/ProjectShowcase'
import { ExperienceSection } from '@/components/sections/ExperienceSection'

export default function Home() {
  return (
    <>
      {/* Hero Section with 3D Scene */}
      <section id="home" className="relative min-h-screen">
        <HeroScene />
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen">
        <AboutSection />
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen">
        <ExperienceSection />
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="min-h-screen">
        <ProjectShowcase />
      </section>
    </>
  )
}