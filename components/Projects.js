'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Image, X, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [expandedProjects, setExpandedProjects] = useState({})

  const toggleReadMore = (projectId) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }))
  }

  const truncateText = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + '...'
  }

  const projects = [
    {
      id: 1,
      title: "Muain CRM & Services System",
      company: "Sahalat LLC",
      description: "Laravel-based CRM system integrated with Ministry services. Built with Laravel 8, AJAX, MySQL, real-time socket notifications, and Bank Muscat payment gateway. This comprehensive system handles complex workflows, user management, and integrates with various government services for seamless operation.",
      technologies: ["Laravel", "MySQL", "AJAX", "WebSockets", "Payment Gateway", "Real-time Notifications"],
      features: [
        "Identity verification and validation",
        "Multi-level user roles and permissions",
        "Complex workflow management system",
        "Advanced statistics and reporting dashboard",
        "Employee task assignment and tracking",
        "Real-time notifications using WebSockets",
        "Bank Muscat payment gateway integration",
        "Multi-language support (Arabic/English)",
        "PDF generation and document management",
        "Timing profiles and working hours management",
        "Service workflow customization",
        "Ticket management with status tracking",
        "Department-based ticket assignment",
        "Automated email notifications",
        "Client-side portal for service requests"
      ],
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
      id: 2,
      title: "Virtual Assistant Chatbot (WhatsApp)",
      company: "Sahalat LLC",
      description: "Automated WhatsApp support bot using Node.js, Laravel, and Puppeteer to improve response times and efficiency. This system handles customer inquiries, provides automated responses, and integrates with existing CRM systems for seamless customer support management.",
      technologies: ["Node.js", "Laravel", "Puppeteer", "WhatsApp API", "RESTful API", "MySQL"],
      features: [
        "Automated customer response system",
        "24/7 customer support availability",
        "Integration with CRM for customer data",
        "Multi-language support capabilities",
        "Advanced reporting and analytics dashboard",
        "Message template management",
        "Customer conversation history",
        "Real-time message processing",
        "Multi-agent support system",
        "Automated follow-up messages",
        "Customer satisfaction tracking",
        "Performance monitoring and optimization"
      ],
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
      id: 3,
      title: "WhatsApp Business API System",
      company: "Sahalat LLC",
      description: "Ongoing development of WhatsApp Business API integration for managing business communications and customer interactions. This comprehensive system enables businesses to manage customer communications at scale with advanced features and integrations.",
      technologies: [
        "Laravel",
        "Flutter",
        "Livewire",
        "WhatsApp Business API",
        "Meta API",
        "RESTful API",
        "PostgreSQL",
        "Redis",
        "Docker"
      ],
      features: [
        "WhatsApp Business API integration with Meta",
        "Multi-channel customer communication management",
        "Advanced automated response system",
        "Real-time messaging with WebSocket support",
        "Message template creation and management",
        "Customer database with PostgreSQL integration",
        "Conversation analytics and reporting",
        "Multi-user team collaboration features",
        "Message scheduling and automation",
        "Customer segmentation and targeting",
        "Integration with external CRM systems",
        "Advanced security and compliance features",
        "Mobile app integration with Flutter",
        "Real-time dashboard with Livewire"
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
    // {
    //   id: 4,
    //   title: "10d.om – Online Shopping Website",
    //   company: "Innotech Company",
    //   description: "E-commerce site for 3D printing products. Built with Laravel, included shopping cart, product management, and user features. This platform provides a complete online shopping experience with secure payments and order management.",
    //   technologies: ["Laravel", "MySQL", "E-commerce", "Payment Gateway", "Bootstrap", "JavaScript"],
    //   features: [
    //     "Complete shopping cart functionality",
    //     "Product catalog with categories and filters",
    //     "User account management and profiles",
    //     "Order processing and tracking system",
    //     "Secure payment gateway integration",
    //     "Inventory management system",
    //     "Customer review and rating system",
    //     "Wishlist and favorite products",
    //     "Order history and invoice generation",
    //     "Admin dashboard for store management",
    //     "Email notifications for orders",
    //     "Search functionality with filters"
    //   ],
    //   images: [],
    //   liveDemo: "https://10d.om",
    //   hasImages: false,
    //   hasLiveDemo: true,
    // },
    {
      id: 5,
      title: "Innotech.om – Company Website",
      company: "Innotech Company",
      description: "Official corporate website built with Squarespace. Led the complete website development including design customization, content strategy, and SEO implementation to establish strong online presence. The website showcases company services and portfolio with modern design principles.",
      technologies: ["Squarespace", "CSS", "SEO", "Responsive Design", "JavaScript", "Google Analytics"],
      features: [
        "Mobile-first responsive design",
        "Advanced SEO optimization techniques",
        "Professional and modern UI/UX design",
        "Fast loading performance optimization",
        "Contact forms and lead generation",
        "Portfolio and case studies showcase",
        "Blog and content management system",
        "Social media integration",
        "Google Analytics integration",
        "Multi-page navigation structure",
        "Call-to-action optimization",
        "Brand consistency across all pages"
      ],
      images: [
        "/images/innotech/innotechHOME.jpg",
      ],
      liveDemo: "https://www.innotech.om",
      hasImages: true,
      hasLiveDemo: true,
      hasGithub: false
    },
    {
      id: 6,
      title: "EstrenArrow Website",
      company: "Sahalat LLC",
      description: "Corporate website built using Laravel PHP Framework with focus on responsive design and performance. This website represents the company's brand and services with modern web standards and optimal user experience.",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript", "jQuery"],
      features: [
        "Fully responsive design for all devices",
        "Performance optimization techniques",
        "SEO-friendly structure and content",
        "Modern and professional design",
        "Fast loading times optimization",
        "Cross-browser compatibility",
        "Contact and inquiry forms",
        "Service pages with detailed information",
        "About us and company profile",
        "Image galleries and portfolio",
        "Social media integration",
        "Regular content updates system"
      ],
      images: [
        "/images/easternarrow.jpg",
      ],
      liveDemo: "https://easternarrow.om",
      hasImages: true,
      hasLiveDemo: true,
    },
    {
      id: 7,
      title: "Meeting Booking System",
      description: "React-based room booking platform with real-time availability and modern UI. This system streamlines the process of booking meeting rooms with intuitive interface and comprehensive management features.",
      technologies: ["React", "JavaScript", "REST API", "CSS3", "Context API", "Axios"],
      features: [
        "Real-time room availability checking",
        "Advanced booking system with time slots",
        "Room management and configuration",
        "User authentication and authorization",
        "Booking history and calendar view",
        "Email notifications and reminders",
        "Admin dashboard for room management",
        "Recurring booking options",
        "Room amenities and specifications",
        "Booking approval workflow",
        "Conflict detection and resolution",
        "Reporting and analytics features"
      ],
      images: [
        "/images/booking_system/login.jpg",
        "/images/booking_system/dashboard1.jpg",
        "/images/booking_system/dashboard2.jpg",
        "/images/booking_system/dashboard3.jpg",
        "/images/booking_system/mybooking.jpg",
        "/images/booking_system/newbooking.jpg",
      ],
      hasLiveDemo: false,
      hasGithub: false,
      hasImages: true,
    },
    {
      id: 8,
      title: "Thirty Line E-Commerce Platform",
      company: "Personal Project",
      description: "A modern React.js e-commerce site featuring minimalist design and curated essential products. Built with a focus on user experience and clean aesthetics.",
      technologies: ["React.js", "React Router", "Context API", "CSS3", "Vite", "JSON API"],
      features: [
        "React functional components with hooks",
        "Centralized state management using Context API",
        "Product filtering by categories",
        "Dynamic shopping cart with quantity controls",
        "Responsive mobile-first design",
        "Smooth animations and transitions",
        "Professional branding implementation",
        "Interactive product catalog",
        "Modern navigation system",
        "Form handling and validation",
        "Reusable component architecture",
        "Fast development with Vite",
        "JSON-based data management",
        "Accessible user interface",
        "Cross-browser compatibility"
      ],
      images: [
        "/images/thirty-line/home1.jpg",
        "/images/thirty-line/home2.jpg",
        "/images/thirty-line/products.jpg",
        "/images/thirty-line/about1.jpg",       
        "/images/thirty-line/about2.jpg",       
        "/images/thirty-line/contact.jpg",       
        "/images/thirty-line/cart.jpg",       
      ],
      hasImages: true,
      hasLiveDemo: false,
      hasGithub: false,
     
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

  const handleImageError = (e) => {
    e.target.style.display = 'none'
    const parent = e.target.parentElement
    const fallback = parent.querySelector('.image-fallback')
    if (fallback) {
      fallback.style.display = 'flex'
    }
  }

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A collection of projects showcasing my skills in web development,
            from enterprise systems to innovative side projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover group"
            >
              {/* Project Images Gallery */}
              {project.hasImages && project.images.length > 0 ? (
                <div className="mb-4">
                  {/* Main Image */}
                  <div
                    className="rounded-xl overflow-hidden bg-gray-100 h-48 cursor-pointer relative group"
                    onClick={() => openImageModal(project, 0)}
                  >
                    <img
                      src={project.images[0]}
                      alt={`${project.title} - Main Preview`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={handleImageError}
                    />

                    {/* Fallback if image doesn't load */}
                    <div className="image-fallback absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
                      <div className="text-center">
                        <Image className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                        <p className="text-blue-600 font-medium">Project Preview</p>
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
                            onError={handleImageError}
                          />
                        </div>
                      ))}
                      {project.images.length > 4 && (
                        <div
                          className="flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 cursor-pointer hover:from-blue-200 hover:to-purple-200 transition-colors duration-200 flex items-center justify-center"
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
                <div className="mb-4 rounded-xl bg-gradient-to-br from-gray-50 to-blue-50 h-48 flex items-center justify-center border-2 border-dashed border-gray-200">
                  <div className="text-center">
                    <Image className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500 text-sm">No Images Available</p>
                  </div>
                </div>
              )}

              {/* Project Title & Company */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-blue-600 font-semibold text-sm">{project.company}</p>
              </div>

              {/* Project Description with Read More */}
              <div className="mb-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {expandedProjects[project.id]
                    ? project.description
                    : truncateText(project.description, 120)}
                </p>
                {project.description.length > 120 && (
                  <button
                    onClick={() => toggleReadMore(project.id)}
                    className="flex items-center text-blue-600 hover:text-blue-700 font-medium text-xs mt-2 transition-colors duration-200"
                  >
                    {expandedProjects[project.id] ? (
                      <>
                        Read Less <ChevronUp className="w-3 h-3 ml-1" />
                      </>
                    ) : (
                      <>
                        Read More <ChevronDown className="w-3 h-3 ml-1" />
                      </>
                    )}
                  </button>
                )}
              </div>

              {/* Technologies */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Technologies:</h4>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 px-2 py-1 rounded-full text-xs font-medium border border-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features with Read More */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Features:</h4>
                <div className="space-y-1">
                  {project.features.slice(0, expandedProjects[project.id] ? project.features.length : 3).map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1 flex-shrink-0">•</span>
                      <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                  {project.features.length > 3 && !expandedProjects[project.id] && (
                    <button
                      onClick={() => toggleReadMore(project.id)}
                      className="flex items-center text-blue-600 hover:text-blue-700 font-medium text-xs mt-1 transition-colors duration-200"
                    >
                      +{project.features.length - 3} more features <ChevronDown className="w-3 h-3 ml-1" />
                    </button>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
                {/* Live Demo Button */}
                {project.hasLiveDemo && project.liveDemo ? (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:-translate-y-1 text-sm"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                ) : (
                  <button
                    disabled
                    className="flex items-center gap-2 bg-gray-100 text-gray-400 px-4 py-2 rounded-lg font-medium text-sm cursor-not-allowed"
                  >
                    <ExternalLink size={16} />
                    No Demo
                  </button>
                )}

                {/* GitHub Button */}
                {project.hasGithub ? (
                  <a
                    href={project.github || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-1 text-sm"
                  >
                    <Github size={16} />
                    Code
                  </a>
                ) : (
                  <button
                    disabled
                    className="flex items-center gap-2 bg-gray-100 text-gray-400 px-4 py-2 rounded-lg font-medium text-sm cursor-not-allowed"
                  >
                    <Github size={16} />
                    Private
                  </button>
                )}

                {/* View Images Button */}
                {project.hasImages && project.images.length > 0 && (
                  <button
                    onClick={() => openImageModal(project, 0)}
                    className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:-translate-y-1 text-sm ml-auto"
                  >
                    <Image size={16} />
                    View Images
                  </button>
                )}
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
                <img
                  src={selectedImage.images[currentImageIndex]}
                  alt={`${selectedImage.title} - Image ${currentImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain"
                  onError={handleImageError}
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
                          onError={handleImageError}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}