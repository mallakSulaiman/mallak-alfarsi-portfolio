'use client'

import { motion } from 'framer-motion'
import { Download, Mail, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 section-padding relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full blur-3xl opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container-custom text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-800 mb-6"
          >
            Mallak <span className="gradient-text">Alfarsi</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-600 mb-8 font-light"
          >
            Software <span className="font-semibold text-blue-600">Engineer</span> & Web{' '}
            <span className="font-semibold text-purple-600">Developer</span>
          </motion.h2>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <p className="text-xl text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed">
              I design and develop reliable, scalable web applications with a strong focus on functionality,
              performance, and user experience.
            </p>

            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Software Engineer with 3+ years of experience working with Laravel, PHP, and JavaScript.
              Experienced in full-stack development, API integration, database-driv en systems,
              and delivering production-ready web solutions.
            </p>

          </motion.div>

          {/* Action Buttons (UNCHANGED CV) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <a
              href="#contact"
              className="border border-gray-300 text-gray-800 px-8 py-3 rounded-xl font-medium hover:bg-gray-100 transition"
            >
              <Mail size={22} />
              Get In Touch
            </a>

            <a
              href="/Mallak Al_Farsi_CV.pdf"
              download
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-medium shadow-lg hover:opacity-90 transition"
            >
              <Download size={22} />
              Download CV
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator (UPDATED TARGET) */}
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
            onClick={() =>
              document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
