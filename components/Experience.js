'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      title: "Web Developer",
      company: "Sahalat LLC",
      period: "Oct 2022 – July 2025",
      location: "Muscat, Oman",
      description: "Led the development of core company systems and custom web solutions. Collaborated with teams to deliver scalable, secure, and user-friendly applications.",
      achievements: [
        "CRM system development",
        "API integrations",
        "Chatbot systems implementation"
      ]
    },
    {
      title: "Web Developer",
      company: "Innotech Company",
      period: "Jan 2020 – Oct 2023",
      location: "Muscat, Oman",
      description: "Contributed to building e-commerce and corporate websites. Assisted in deployment, maintenance, and technical support of web applications.",
      achievements: [
        "E-commerce development",
        "SEO optimization",
        "Performance optimization"
      ]
    }
  ]

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 mb-8 shadow-lg"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{exp.title}</h3>
                  <h4 className="text-xl text-blue-600 font-semibold">{exp.company}</h4>
                </div>
                <div className="flex items-center gap-4 mt-2 lg:mt-0">
                  <div className="flex items-center gap-1 text-gray-600">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{exp.description}</p>
              
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">Key Achievements:</h5>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}