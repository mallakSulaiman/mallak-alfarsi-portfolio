'use client'

import { motion } from 'framer-motion'
import {
  Code,
  Database,
  Settings,
  Users,
  Zap,
  Lightbulb,
  Target,
  Clock,
  Brain
} from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages & Frameworks",
      color: "from-blue-500 to-cyan-500",
      skills: [
        "PHP (Laravel, Livewire)",
        "JavaScript (React.js, Next.js)",
        "HTML / CSS",
        "Node.js"
      ]
    },
    {
      icon: Database,
      title: "Databases",
      color: "from-purple-500 to-pink-500",
      skills: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Redis"
      ]
    },
    {
      icon: Settings,
      title: "Tools & Practices",
      color: "from-green-500 to-emerald-500",
      skills: [
        "Git & GitHub",
        "Docker",
        "Agile / Scrum",
        "DevOps Basics",
        "Postman",
        "Swagger",
        "Figma",
        "Mermaid.js",
        "Draw.io"
      ]
    }
  ]

  const softSkills = [
    { icon: Users, name: "Collaboration", description: "Strong teamwork and communication skills" },
    { icon: Zap, name: "Adaptability", description: "Quick to learn and adapt to new technologies" },
    { icon: Lightbulb, name: "Problem Solving", description: "Analytical thinking and creative solutions" },
    { icon: Target, name: "Leadership", description: "Ability to guide tasks and support teams" },
    { icon: Clock, name: "Time Management", description: "Efficient planning and delivery" },
    { icon: Brain, name: "Fast Learner", description: "Rapid understanding of new systems" }
  ]

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container-custom">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Technologies and tools I use to build scalable, maintainable systems
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-3 gap-10 mb-24">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              {/* Title */}
              <div className="text-center mb-6">
                <div
                  className={`bg-gradient-to-r ${category.color} text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}
                >
                  <category.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {category.title}
                </h3>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm font-medium rounded-full
                               bg-gray-100 text-gray-700
                               hover:bg-gray-200 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Professional <span className="gradient-text">Strengths</span>
          </h3>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Soft skills that strengthen my technical work
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <skill.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">
                  {skill.name}
                </h4>
                <p className="text-gray-600 text-sm">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
