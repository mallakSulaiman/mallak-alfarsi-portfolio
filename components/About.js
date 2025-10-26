'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, Users } from 'lucide-react'

export default function About() {
//   const stats = [
//     { icon: Code, number: '3+', text: 'Years Experience' },
//     { icon: Database, number: '20+', text: 'Projects Completed' },
//     { icon: Cloud, number: '10+', text: 'Technologies' },
//     { icon: Users, number: '5+', text: 'Team Projects' },
//   ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Software Engineer with 3 years of experience in full-stack web development
            </h3>
            <p className="text-gray-600 mb-6">
              Skilled in Laravel, PHP, and JavaScript frameworks for building scalable web applications, 
              APIs, and database systems. Experienced in frontend and backend development, integrations, 
              and cloud deployments.
            </p>
            <p className="text-gray-600 mb-8">
              Familiar with Agile/Scrum teamwork and DevOps practices. Strong problem-solver with a focus 
              on delivering reliable and user-friendly solutions.
            </p>
            
            {/* <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.text}</div>
                </motion.div>
              ))}
            </div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-100 rounded-2xl p-8"
          >
            <h4 className="text-xl font-bold text-gray-800 mb-6">Education</h4>
            
            <div className="space-y-6">
              <div className="border-l-2 border-blue-600 pl-4">
                <h5 className="font-semibold text-gray-800">
                  Bachelor of Information Technology (Software Engineering)
                </h5>
                <p className="text-gray-600">University of Technology and Applied Sciences-Ibri, Oman</p>
                <p className="text-gray-500 text-sm">Sep 2015 – Jan 2021</p>
              </div>
              
              <div className="border-l-2 border-blue-600 pl-4">
                <h5 className="font-semibold text-gray-800">High School Diploma</h5>
                <p className="text-gray-600">Hajer Um Esmail High School, Yunqal, Oman</p>
                <p className="text-gray-500 text-sm">Sep 2013 – Jun 2015</p>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Languages</h4>
              <div className="flex gap-4">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-lg">Arabic - Native</span>
                <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">English - Very Good</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}