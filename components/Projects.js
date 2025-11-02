'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Image, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const projects = [
    {
      title: "Muain CRM & Services System",
      company: "Sahalat LLC",
      description: "Laravel-based CRM system integrated with Ministry services. Built with Laravel 8, AJAX, MySQL, real-time socket notifications, and Bank Muscat payment gateway.",
      technologies: ["Laravel", "MySQL", "AJAX", "WebSockets"],
      features: ["Identity verification", "User roles", "Workflows", "Statistics", "Employee task handling"],
      images: [
        "/images/admin_Dashboard.jpg",
        "/images/Emplyee_dashboard1.jpg",
        "/images/Emplyee_dashboard2.jpg",
        "/images/Ticket_assigned Todepartment.jpg",
        "/images/view_ticket1.jpg",
        "/images/view_ticket2.jpg",
        "/images/employee_submit ticket_for_client.jpg",
        "/images/Additional_request from_client.jpg",
        "/images/transfer_ticket_to_other_employee.jpg",
        "/images/Additional_request_from_other_employee.jpg",
        "/images/lanuage.jpg",
        "/images/Additional_request from_client.jpg",
        "/images/add_employee-1.jpg",
        "/images/Roles.jpg",
        "/images/RolePermissions1.jpg",
        "/images/RolePermissions2.jpg",
        "/images/employee_changeStatus.jpg",
        "/images/generate_PDF.jpg",
        "/images/create_PDF.jpg",
        "/images/Timing_profiles1.jpg",
        "/images/workingHours.jpg",
        "/images/Timing_profile2.jpg",
        "/images/ServicesList.jpg",
        "/images/Service_Workflow_Detaiels.jpg",
        "/images/workFlow_Dtaiels.jpg",
        "/images/workFlow_create.jpg",
        "/images/Client_Side.jpg",


      ],

      hasImages: true,
      hasLiveDemo: false,
      hasGithub: false
    },
    {
      title: "Virtual Assistant Chatbot (WhatsApp)",
      company: "Sahalat LLC",
      description: "Automated WhatsApp support bot using Node.js, Laravel, and Puppeteer to improve response times and efficiency.",
      technologies: ["Node.js", "Laravel", "Puppeteer", "WhatsApp API"],
      features: ["Automated responses", "Efficiency improvement", "24/7 support"],
      images: [
        "/images/WhatsApp/WhatsApp-dashboard.jpg",
        "/images/WhatsApp/Main_menu_settings.jpg",
        "/images/WhatsApp/Request.jpg",
        "/images/WhatsApp/Request_detaiels.jpg",
        "/images/WhatsApp/sampleOf_Reports.jpg",
        "/images/WhatsApp/Statistics&Reports.jpg",
        "/images/WhatsApp/Usage_statistics.jpg",
        "/images/WhatsApp/WhatsApp-dashboard.jpg",
        "/images/WhatsApp/WhatsApp_side.jpg",
      ],

      hasImages: true,
      hasLiveDemo: false,
      hasGithub: true
    },
    {
      title: "WhatsApp Business API System",
      company: "Sahalat LLC",
      description: "Ongoing development of WhatsApp Business API integration for managing business communications and customer interactions.",
      technologies: [
        "Laravel",
        "Flutter",
        "Livewire",
        "WhatsApp Business API",
        "Meta API",
        "RESTful API",
        "PostgreSQL"
      ],
      features: [
        "WhatsApp Business API integration",
        "Customer message management",
        "Automated responses",
        "Multi-channel communication",
        "Real-time messaging",
        "Message templates",
        "Customer database with PostgreSQL"
      ],
      images: [
        "/images/chatbot -meta/1.jpg",
        "/images/chatbot -meta/2.jpg",
        "/images/chatbot -meta/3.jpg",
        "/images/chatbot -meta/4.jpg",
      ],
      hasImages: true,
      hasLiveDemo: false,
      hasGithub: false
    },
    {
      title: "10d.om – Online Shopping Website",
      company: "Innotech Company",
      description: "E-commerce site for 3D printing products. Built with Laravel, included shopping cart, product management, and user features.",
      technologies: ["Laravel", "MySQL", "E-commerce", "Payment Gateway"],
      features: ["Shopping cart", "Product management", "User accounts", "Order processing"],
      images: [
      ],
      liveDemo: "https://10d.om",
      hasImages: false,
      hasLiveDemo: true,

    },
    {
      title: "Innotech.om – Company Website",
      company: "Innotech Company",
      description: "Official corporate website built with Squarespace. Led the complete website development including design customization, content strategy, and SEO implementation to establish strong online presence.",
      technologies: ["Squarespace", "CSS", "SEO", "Responsive Design"],
      features: ["Mobile-friendly", "SEO optimized", "Professional design", "Fast loading"],
      images: [
        "/images/innotech/innotechHOME.jpg",

      ],
      liveDemo: "https://www.innotech.om",
      hasImages: true,
      hasLiveDemo: true,
      hasGithub: false
    },
    {
      title: "EstrenArrow Website",
      company: "Sahalat LLC",
      description: "Corporate website built using Laravel PHP Framework with focus on responsive design and performance.",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      features: ["Responsive design", "Performance optimized", "SEO friendly"],
      images: [
        "/images/easternarrow.jpg",
      ],
      liveDemo: "https://easternarrow.om",
      hasImages: true,
      hasLiveDemo: true,
    },
    {
      title: "Meeting Booking System",
      description: "React-based room booking platform with real-time availability and modern UI.",
      technologies: ["React", "JavaScript", "REST API", "CSS3"],
      features: ["Booking system", "Room management", "Responsive design"],
      images: [
        "/images/booking_system/login.jpg",
        "/images/booking_system/dashboard1.jpg",
        "/images/booking_system/dashboard2.jpg",
        "/images/booking_system/dashboard3.jpg",
        "/images/booking_system/mybooking.jpg",
        "/images/booking_system/newbooking.jpg",      ],
      hasLiveDemo: false,
      hasGithub: false,
      hasImages: true,
    }
  ]

  const openImageModal = (project, imageIndex = 0) => {
    setSelectedImage(project)
    setCurrentImageIndex(imageIndex)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedImage) {
      setCurrentImageIndex((prev) =>
        prev === selectedImage.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedImage) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedImage.images.length - 1 : prev - 1
      )
    }
  }

  // Function to handle image error (if image doesn't exist)
  const handleImageError = (e) => {
    e.target.style.display = 'none'
    const parent = e.target.parentElement
    const fallback = parent.querySelector('.image-fallback')
    if (fallback) {
      fallback.style.display = 'flex'
    }
  }

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in Web development,
            from enterprise systems to innovative side projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Project Images Gallery */}
              {project.hasImages && project.images.length > 0 ? (
                <div className="mb-4">
                  {/* Main Image */}
                  <div
                    className="rounded-xl overflow-hidden bg-gray-100 h-48 cursor-pointer relative group"
                    onClick={() => openImageModal(project, 0)}
                  >
                    {/* Actual Image */}
                    <img
                      src={project.images[0]}
                      alt={`${project.title} - Main Preview`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={handleImageError}
                    />

                    {/* Fallback if image doesn't load */}
                    <div className="image-fallback absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
                      <div className="text-center">
                        <Image className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                        <p className="text-blue-600 font-medium">Image not found</p>
                        <p className="text-blue-400 text-xs mt-1">
                          Check: {project.images[0]}
                        </p>
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="bg-white rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <Image className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>

                    {/* Image Count Badge */}
                    {project.images.length > 1 && (
                      <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded-full text-xs">
                        {project.images.length} images
                      </div>
                    )}
                  </div>

                  {/* Thumbnail Strip */}
                  {project.images.length > 1 && (
                    <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
                      {project.images.slice(0, 4).map((img, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="flex-shrink-0 w-16 h-16 rounded-lg bg-gray-200 cursor-pointer hover:opacity-80 transition-opacity duration-200 overflow-hidden relative"
                          onClick={() => openImageModal(project, imgIndex)}
                        >
                          <img
                            src={img}
                            alt={`${project.title} - Thumbnail ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = 'none'
                              const parent = e.target.parentElement
                              const fallback = document.createElement('div')
                              fallback.className = 'absolute inset-0 flex items-center justify-center bg-gray-300'
                              fallback.innerHTML = `<span class="text-xs font-medium text-gray-600">${imgIndex + 1}</span>`
                              parent.appendChild(fallback)
                            }}
                          />
                        </div>
                      ))}
                      {project.images.length > 4 && (
                        <div
                          className="flex-shrink-0 w-16 h-16 rounded-lg bg-blue-100 cursor-pointer hover:bg-blue-200 transition-colors duration-200 flex items-center justify-center"
                          onClick={() => openImageModal(project, 0)}
                        >
                          <span className="text-xs font-medium text-blue-600">
                            +{project.images.length - 4}
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div className="mb-4 rounded-xl bg-gray-50 h-48 flex items-center justify-center border-2 border-dashed border-gray-200">
                  <div className="text-center">
                    <Image className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500 text-sm">No Images Available</p>
                  </div>
                </div>
              )}

              {/* Project Title & Company */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">{project.title}</h3>
                <p className="text-blue-600 font-semibold text-sm">{project.company}</p>
              </div>

              {/* Project Description */}
              <p className="text-gray-600 mb-4 text-sm line-clamp-3">{project.description}</p>

              {/* Technologies */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Technologies:</h4>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Features:</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  {project.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                  {project.features.length > 3 && (
                    <li className="text-gray-500 text-xs">
                      +{project.features.length - 3} more features
                    </li>
                  )}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
                {/* Live Demo Button */}
                {project.hasLiveDemo && project.liveDemo ? (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium text-sm transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                ) : (
                  <button
                    disabled
                    className="flex items-center gap-2 text-gray-400 font-medium text-sm cursor-not-allowed"
                  >
                    <ExternalLink size={16} />
                    No Demo
                  </button>
                )}

                {/* GitHub Button */}
                {project.hasGithub && project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors duration-200"
                  >
                    <Github size={16} />
                    Code
                  </a>
                ) : (
                  <button
                    disabled
                    className="flex items-center gap-2 text-gray-400 font-medium text-sm cursor-not-allowed"
                  >
                    <Github size={16} />
                    Private
                  </button>
                )}

                {/* View Images Button */}
                {project.hasImages && project.images.length > 0 && (
                  <button
                    onClick={() => openImageModal(project, 0)}
                    className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium text-sm transition-colors duration-200 ml-auto"
                  >
                    <Image size={16} />
                    View {project.images.length > 1 ? `${project.images.length} Images` : 'Image'}
                  </button>
                )}
              </div>

              {/* Status Badge */}
              <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${project.hasLiveDemo ? 'bg-green-500' : 'bg-gray-400'
                    }`}></div>
                  <span className="text-xs text-gray-500">
                    {project.hasLiveDemo ? 'Demo Available' : 'No Demo'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${project.images.length > 0 ? 'bg-purple-500' : 'bg-gray-400'
                    }`}></div>
                  <span className="text-xs text-gray-500">
                    {project.images.length > 0 ? `${project.images.length} Images` : 'No Images'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{selectedImage.title}</h3>
                  <p className="text-gray-600 text-sm">{selectedImage.company}</p>
                </div>
                <button
                  onClick={closeImageModal}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <X size={24} className="text-gray-600" />
                </button>
              </div>

              {/* Image Display */}
              <div className="relative bg-gray-900 flex items-center justify-center min-h-[400px] max-h-[60vh]">
                {/* Actual Image Display */}
                <img
                  src={selectedImage.images[currentImageIndex]}
                  alt={`${selectedImage.title} - Image ${currentImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    const parent = e.target.parentElement
                    const fallback = document.createElement('div')
                    fallback.className = 'flex items-center justify-center w-full h-full'
                    fallback.innerHTML = `
                      <div class="text-center text-white">
                        <Image class="w-16 h-16 mx-auto mb-4 text-blue-400" />
                        <p class="text-lg font-medium mb-2">Image not found</p>
                        <p class="text-blue-300 text-sm">${selectedImage.images[currentImageIndex]}</p>
                        <p class="text-gray-400 text-xs mt-2">Please check the file path</p>
                      </div>
                    `
                    parent.appendChild(fallback)
                  }}
                />

                {/* Navigation Arrows */}
                {selectedImage.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-200"
                    >
                      <ChevronLeft size={24} className="text-white" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-200"
                    >
                      <ChevronRight size={24} className="text-white" />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {selectedImage.images.length}
                </div>
              </div>

              {/* Image Thumbnails */}
              {selectedImage.images.length > 1 && (
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <div className="flex gap-2 overflow-x-auto justify-center">
                    {selectedImage.images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-16 h-16 rounded-lg border-2 transition-all duration-200 overflow-hidden ${index === currentImageIndex
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-300 bg-white hover:border-gray-400'
                          }`}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none'
                            const parent = e.target.parentElement
                            parent.className += ' bg-gray-300 flex items-center justify-center'
                            parent.innerHTML = `<span class="text-xs font-medium text-gray-600">${index + 1}</span>`
                          }}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Want to see more of my work or discuss a project?
          </p>
          <a
            href="#contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 inline-flex items-center gap-2"
          >
            <ExternalLink size={18} />
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}