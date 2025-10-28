'use client'

import { motion } from 'framer-motion'
import { Download, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 section-padding">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Mallak <span className="text-blue-600">Alfarsi</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">
            Software Engineer
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Building scalable web applications with Laravel, React.js, and Next.js. 
            Passionate about creating user-friendly solutions and innovative digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <a href="#contact" className="btn-primary flex items-center justify-center gap-2">
              <Mail size={20} />
              Get In Touch
            </a> */}
            <a 
              href="/Mallak Al_Farsi_CV.pdf" 
              download 
              className="btn-secondary flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download CV
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-20"
        >
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-500">Scroll to explore</p>
        </motion.div>
      </div>
    </section>
  )
}