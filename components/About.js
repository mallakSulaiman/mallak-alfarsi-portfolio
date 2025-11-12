'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, Users, Award, Calendar } from 'lucide-react'

export default function About() {
  const stats = [
    { icon: Code, number: '3+', text: 'Years Experience' },
    { icon: Database, number: '20+', text: 'Projects Completed' },
    { icon: Cloud, number: '10+', text: 'Technologies' },
    { icon: Users, number: '5+', text: 'Team Projects' },
  ]

  const skills = [
    { name: 'Laravel', level: 90 },
    { name: 'PHP', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
    { name: 'MySQL', level: 85 },
    { name: 'Tailwind CSS', level: 80 },
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Passionate software engineer crafting digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Software Engineer with <span className="gradient-text">3+ years</span> of experience
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Skilled in Laravel, PHP, and JavaScript frameworks for building scalable web applications, 
                APIs, and database systems. Experienced in frontend and backend development, integrations, 
                and cloud deployments.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Familiar with Agile/Scrum teamwork and DevOps practices. Strong problem-solver with a focus 
                on delivering reliable and user-friendly solutions that exceed client expectations.
              </p>
              
              {/* Skills Progress Bars */}
              {/* <div className="space-y-4 mb-8">
                <h4 className="text-lg font-semibold text-gray-800">Technical Skills</h4>
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: index * 0.1, duration: 1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div> */}

              {/* Stats Grid */}
              {/* <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.text}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center bg-gray-50 rounded-xl p-4 card-hover"
                  >
                    <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-800">{stat.number}</div>
                    <div className="text-gray-600 text-sm">{stat.text}</div>
                  </motion.div>
                ))}
              </div> */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Education Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <div className="flex items-center mb-6">
                <Award className="w-6 h-6 text-blue-600 mr-3" />
                <h4 className="text-xl font-bold text-gray-800">Education</h4>
              </div>
              
              <div className="space-y-6">
                <div className="relative pl-8">
                  <div className="absolute left-0 top-2 w-3 h-3 bg-blue-600 rounded-full"></div>
                  <div className="border-l-2 border-blue-200 pl-6">
                    <h5 className="font-semibold text-gray-800">
                      Bachelor of Information Technology (Software Engineering)
                    </h5>
                    <p className="text-gray-600">University of Technology and Applied Sciences-Ibri, Oman</p>
                    <div className="flex items-center mt-1 text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>Sep 2015 – Jan 2021</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-0 top-2 w-3 h-3 bg-purple-600 rounded-full"></div>
                  <div className="border-l-2 border-purple-200 pl-6">
                    <h5 className="font-semibold text-gray-800">High School Diploma</h5>
                    <p className="text-gray-600">Hajer Um Esmail High School, Yunqal, Oman</p>
                    <div className="flex items-center mt-1 text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>Sep 2013 – Jun 2015</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Languages Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <h4 className="text-xl font-bold text-gray-800 mb-6">Languages</h4>
              <div className="flex flex-wrap gap-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg">
                  Arabic - Native
                </span>
                <span className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg">
                  English - Very Good
                </span>
              </div>
            </div>

            {/* Certifications Card */}
            {/* <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white card-hover">
              <h4 className="text-xl font-bold mb-4">Certifications & Awards</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Laravel Certified Developer
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  AWS Cloud Practitioner
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  React Frontend Development
                </li>
              </ul>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}