'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building, Award, Target, Users, Zap, Code, Rocket } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      title: "Web Developer",
      company: "Sahalat LLC",
      period: "16 Oct 2022 – 31 Oct 2025",
      location: "Muscat, Oman",
      description: "Web development of CRM systems, chatbots, and business applications using Laravel, Livewire, React.js, Node.js, and modern web technologies.",
      achievements: [
        "Muain CRM development with real-time features",
        "WhatsApp Business API system implementation",
        "Laravel corporate website development",
        "Payment gateway and API integrations",
        "Performance optimization and security enhancements",
        "Collaborated with cross-functional teams",
        "Maintained documentation and best practices",  
        "Deployed applications to cloud platforms",
        "Provided technical support and troubleshooting",
        "Implemented user authentication and authorization",
        "Utilized version control with Git and GitHub",
        "Adopted Agile methodologies for project management",
        "Integrated third-party services and APIs",
        "Optimized database queries and schema design",
        "Implemented caching strategies for improved performance",
        "Wrote unit and integration tests to ensure code quality",
        "Participated in client meetings to gather requirements",
      ],
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      technologies: ["Laravel", "Livewire", "React.js", "Node.js", "MySQL", "Git"]
    },
    {
      title: "Web Developer - Freelancer",
      company: "Innotech Company",
      period: "31 Jan 2020 – 31 Oct 2023",
      location: "Muscat, Oman",
      description: "Contributed to building e-commerce and corporate websites. Assisted in deployment, maintenance, and technical support of web applications.",
      achievements: [
        "E-commerce development",
        "SEO optimization",
        "Performance optimization",
        "Technical support and maintenance",
        "Client communication and requirement gathering",
        "Collaborated with design and marketing teams",
        "Implemented responsive design",
        "Tested and debugged applications",
      ],
      icon: Rocket,
      color: "from-purple-500 to-pink-500",
      technologies: ["PHP , Laravel ", "JavaScript", "HTML/CSS", "Squarespace", "SEO", "Responsive Design"]
    },
    {
      title: "Software Engineering Training",
      company: "Ministry of Interior",
      period: "Feb 2021 – Apr 2021",
      location: "Oman",
      description: "Intensive software engineering training program focusing on web development, team collaboration, and system performance optimization.",
      achievements: [
        "Web development with PHP and Java",
        "Team-based project collaboration",
        "System performance optimization",
        "Debugging and problem-solving",
      ],
      icon: Users,
      color: "from-green-500 to-emerald-500",
      technologies: ["PHP", "Java", "Team Collaboration", "Problem Solving"]
    }
  ]

  const additionalExperiences = [
    {
      title: "Technical Support",
      company: "Surgical Team Project",
      period: "2018 – 2019",
      description: "Provided technical support and system maintenance",
      icon: Zap,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Team Supervisor",
      company: "Injaz Digital Challenges",
      period: "Represented Oman",
      description: "Led teams in national digital innovation challenges",
      icon: Target,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Event Organizer",
      company: "4th iTech Marathon",
      period: "2019",
      description: "Organized and managed technology innovation events",
      icon: Users,
      color: "from-teal-500 to-blue-500"
    },
    {
      title: "Training Program",
      company: "Software Engineering",
      period: "2021",
      description: "Advanced software development training",
      icon: Award,
      color: "from-pink-500 to-rose-500"
    }
  ]

  return (
    <section id="experience" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            My professional journey in software development and web technologies
          </p>
        </motion.div>

        {/* Main Experience Timeline */}
        <div className="max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative mb-12"
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-blue-200 to-purple-200 z-0"></div>
              )}
              
              {/* Experience Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                    {/* Icon */}
                    <div className={`bg-gradient-to-r ${exp.color} text-white p-4 rounded-2xl flex-shrink-0`}>
                      <exp.icon className="w-6 h-6" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{exp.title}</h3>
                      <h4 className="text-xl text-blue-600 font-semibold">{exp.company}</h4>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex items-center gap-2 text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                      <MapPin size={16} />
                      <span className="text-sm font-medium">{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 text-lg leading-relaxed">{exp.description}</p>

                {/* Technologies */}
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-800 mb-3">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div>
                  <h5 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-600" />
                    Key Achievements:
                  </h5>
                  <div className="grid md:grid-cols-2 gap-3">
                    {exp.achievements.map((achievement, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm leading-relaxed">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Additional <span className="gradient-text">Experience</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Other professional engagements and leadership experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {additionalExperiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover text-center group"
              >
                <div className={`bg-gradient-to-r ${exp.color} text-white p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <exp.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-800 text-lg mb-2">{exp.title}</h4>
                <p className="text-blue-600 font-semibold text-sm mb-2">{exp.company}</p>
                <p className="text-gray-500 text-xs mb-3">{exp.period}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}