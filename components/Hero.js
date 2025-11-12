'use client'

import { motion } from 'framer-motion'
import { Download, Mail, ChevronDown, Code, Database, Cloud } from 'lucide-react'

export default function Hero() {
  const skills = [
    { icon: Code, name: 'Frontend', description: 'React, Next.js, Tailwind' },
    { icon: Database, name: 'Backend', description: 'Laravel, PHP, MySQL' },
    { icon: Cloud, name: 'DevOps', description: 'Docker, CI/CD' }
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 section-padding relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container-custom text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-800 mb-6"
          >
            Mallak <span className="gradient-text">Alfarsi</span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-600 mb-8 font-light"
          >
            Software <span className="font-semibold text-blue-600">Engineering</span> & Web <span className="font-semibold text-purple-600">Developer</span>
          </motion.h2>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Passionate about building scalable web applications with 
            Laravel, React.js, and Next.js. Creating user-friendly solutions
              and innovative digital experiences that make a difference.
          </motion.p>

          {/* Skills Overview */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 card-hover"
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-xl w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <skill.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">{skill.name}</h3>
                <p className="text-gray-600 text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div> */}
          
          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <a 
              href="#contact"
              className="btn-primary flex items-center justify-center gap-3 text-lg px-8 py-4"
            >
              <Mail size={22} />
              Get In Touch
            </a>
            <a 
              href="/Mallak Al_Farsi_CV.pdf" 
              download 
              className="btn-secondary flex items-center justify-center gap-3 text-lg px-8 py-4 border-2"
            >
              <Download size={22} />
              Download CV
            </a>
          </motion.div>

         
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-500 hover:text-blue-600 transition-colors duration-300 cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}