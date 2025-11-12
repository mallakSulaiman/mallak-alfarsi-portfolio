'use client'

import { motion } from 'framer-motion'
import { Code2, Mail, MessageCircle, Linkedin, MapPin, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'http://www.linkedin.com/in/mallak-alfarsi',
      label: 'LinkedIn',
      color: 'hover:bg-blue-700'
    },
    {
      icon: Mail,
      href: 'mailto:Mallaksulaiman1@hotmail.com',
      label: 'Email',
      color: 'hover:bg-cyan-600'
    },
    {
      icon: MessageCircle,
      href: '#',
      label: 'WhatsApp',
      color: 'hover:bg-green-600',
      onClick: () => {
        const phoneNumber = '96896130994'
        const message = 'Hello Mallak! I came across your portfolio and would like to connect with you.'
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, '_blank')
      }
    }
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-600 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 py-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 rounded-lg">
                <Code2 size={24} />
              </div>
              <span className="text-2xl font-bold">
                Mallak <span className="gradient-text">Alfarsi</span>
              </span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Software Engineering & Web Developer passionate about creating innovative digital solutions and user-friendly applications.
            </p>
            <div className="flex items-center justify-center md:justify-start text-gray-400 space-x-2">
              <MapPin size={16} />
              <span className="text-sm">Muscat, Oman</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline text-sm"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <h3 className="text-lg font-semibold mb-6 text-white">Let's Connect</h3>
            <div className="flex justify-center md:justify-end space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  onClick={social.onClick}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-gray-800 text-white p-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 ${social.color} border border-gray-700`}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
            <div className="text-gray-300">
              <p className="text-sm mb-1">Available for new projects</p>
              <div className="flex items-center justify-center md:justify-end space-x-1 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs">Open to opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center py-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Mallak Sulaiman Alfarsi. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-4 text-gray-400 text-sm">
              <p className="flex items-center space-x-1">
                <span>Software Engineering</span>
                <span className="text-blue-400">|</span>
                <span>Web Developer</span>
              </p>
            </div>

            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart size={14} className="text-red-400 animate-pulse" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          viewport={{ once: true }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-xl shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 z-50"
          aria-label="Back to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      </div>
    </footer>
  )
}