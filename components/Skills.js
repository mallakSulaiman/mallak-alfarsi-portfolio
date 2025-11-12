'use client'

import { motion } from 'framer-motion'
import { Code, Database, Settings, Users, Zap, Lightbulb, Target, Clock, Brain } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages & Frameworks",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "PHP (Laravel, Livewire)", level: 95 },
        { name: "JavaScript (React.js, Next.js)", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Node.js", level: 75 }
      ]
    },
    {
      icon: Database,
      title: "Databases",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "MySQL", level: 88 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 50 },
      ]
    },
    {
      icon: Settings,
      title: "Tools & Practices",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 60 },
        { name: "Agile/Scrum", level: 50 },
        { name: "DevOps", level: 50 },
        { name: "Postman API", level: 90 },
        { name: "Swagger", level: 70 },
        { name: "Figma, Mermaid.js, Draw.io", level: 70 },
      ]
    }
  ]

  const softSkills = [
    { icon: Users, name: "Collaboration", description: "Team player with excellent communication skills" },
    { icon: Zap, name: "Adaptability", description: "Quick to learn and adapt to new technologies" },
    { icon: Lightbulb, name: "Problem-Solving", description: "Creative solutions for complex challenges" },
    { icon: Target, name: "Leadership", description: "Project management and team guidance" },
    { icon: Clock, name: "Time Management", description: "Efficient task prioritization and delivery" },
    { icon: Brain, name: "Fast Learning", description: "Rapid acquisition of new skills and technologies" }
  ]

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical expertise and professional capabilities
          </p>
        </motion.div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover group"
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <div className={`bg-gradient-to-r ${category.color} text-white p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {category.title}
                </h3>
              </div>
              
              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-medium text-gray-800 text-sm">{skill.name}</span>
                      <span className="text-blue-600 font-semibold text-sm bg-blue-50 px-2 py-1 rounded-full">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: index * 0.1, duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className={`bg-gradient-to-r ${category.color} h-3 rounded-full shadow-sm`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Professional <span className="gradient-text">Strengths</span>
          </h3>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Beyond technical expertise, these soft skills enable me to deliver exceptional results and collaborate effectively
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover group text-center"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-xl w-12 h-12 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-800 text-lg mb-2">{skill.name}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}