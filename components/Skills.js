'use client'

import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: [
        { name: "PHP (Laravel, Livewire)", level: 95 },
        { name: "JavaScript (React.js, Next.js)", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Node.js", level: 75 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: 88 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 50 },
      ]
    },
    {
      title: "Tools & Practices",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 60 },
        { name: "Agile/Scrum", level: 50 },
        { name: "DevOps", level: 50 },
        { name: "Postman API", level: 90 },
        { name: "Swagger ", level: 70 },
        { name: "Figma , Mermaid.js, Draw.io ", level: 70 },

      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-800">{skill.name}</span>
                      <span className="text-blue-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: index * 0.1, duration: 1 }}
                        viewport={{ once: true }}
                        className="bg-blue-600 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
            {["Adaptability", "Collaboration", "Leadership", "Problem-Solving", "Time Management", "Fast Learning"].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}