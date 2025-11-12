'use client'

import { motion } from 'framer-motion'
import { Mail, MessageCircle, Linkedin, MapPin } from 'lucide-react'

export default function Contact() {
  // WhatsApp click handler
  const handleWhatsAppClick = () => {
    const phoneNumber = '96896130994'
    const message = 'Hello Mallak! I came across your portfolio and would like to connect with you.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  // Contact cards data
  const contactCards = [
    {
      icon: Mail,
      title: 'Email',
      value: 'Mallaksulaiman1@hotmail.com',
      link: 'mailto:Mallaksulaiman1@hotmail.com',
      gradient: 'from-blue-500 to-cyan-500',
      hoverGradient: 'hover:from-blue-600 hover:to-cyan-600',
      iconColor: 'text-white'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+968 96130994',
      onClick: handleWhatsAppClick,
      gradient: 'from-green-500 to-emerald-500',
      hoverGradient: 'hover:from-green-600 hover:to-emerald-600',
      iconColor: 'text-white'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'mallak-alfarsi',
      link: 'http://www.linkedin.com/in/mallak-alfarsi',
      gradient: 'from-blue-600 to-blue-700',
      hoverGradient: 'hover:from-blue-700 hover:to-blue-800',
      iconColor: 'text-white'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Muscat, Oman',
      link: 'https://maps.app.goo.gl/wgnrdKzvQK7DzR188',
      gradient: 'from-purple-500 to-pink-500',
      hoverGradient: 'hover:from-purple-600 hover:to-pink-600',
      iconColor: 'text-white'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can work together to bring your ideas to life!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Cards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                {card.onClick ? (
                  <div
                    onClick={card.onClick}
                    className={`bg-gradient-to-r ${card.gradient} ${card.hoverGradient} text-white rounded-2xl p-6 shadow-lg cursor-pointer transform transition-all duration-300 hover:-translate-y-2 card-hover h-full flex flex-col`}
                  >
                    {/* Icon */}
                    <div className="mb-4">
                      <div className="bg-white/20 p-3 rounded-xl w-12 h-12 flex items-center justify-center">
                        <card.icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                      <p className="text-white/80 text-sm mb-3">{card.description}</p>
                      <p className="text-white font-medium">{card.value}</p>
                    </div>

                    {/* Action Text */}
                    <div className="mt-4 pt-4 border-t border-white/20">
                      <p className="text-white/70 text-sm font-medium">Click to connect</p>
                    </div>
                  </div>
                ) : (
                  <a
                    href={card.link}
                    target={card.link.startsWith('http') ? '_blank' : '_self'}
                    rel={card.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className={`bg-gradient-to-r ${card.gradient} ${card.hoverGradient} text-white rounded-2xl p-6 shadow-lg block transform transition-all duration-300 hover:-translate-y-2 card-hover h-full flex flex-col`}
                  >
                    {/* Icon */}
                    <div className="mb-4">
                      <div className="bg-white/20 p-3 rounded-xl w-12 h-12 flex items-center justify-center">
                        <card.icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                      <p className="text-white/80 text-sm mb-3">{card.description}</p>
                      <p className="text-white font-medium">{card.value}</p>
                    </div>

                    {/* Action Text */}
                    <div className="mt-4 pt-4 border-t border-white/20">
                      <p className="text-white/70 text-sm font-medium">
                        {card.title === 'Email' ? 'Send email' : 
                         card.title === 'LinkedIn' ? 'View profile' : 
                         'Get directions'}
                      </p>
                    </div>
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>      
        </div>
      </div>
    </section>
  )
}