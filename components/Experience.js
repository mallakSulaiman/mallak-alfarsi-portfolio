'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      title: "Web Developer",
      company: "Sahalat LLC",
      period: "16 Oct 2022 – 31 Oct 2025",
      location: "Muscat, Oman",
      description: "Web development of CRM systems, chatbots, and business applications using Laravel,Livewire, React.js, Node.js, and modern web technologies.",
      achievements: [
        "Muain CRM development with real-time features",
        "AI WhatsApp chatbots with OpenAI integration",
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
             

        
      ]
    },
    {
      title: "Web Developer- Freelancer",
      company: "Innotech Company",
      period: " 31 Jan 2020 – 31 Oct 2023 ",
      location: "Muscat, Oman",
      description: "Contributed to building e-commerce and corporate websites. Assisted in deployment, maintenance, and technical support of web applications.",
      achievements: [
        "E-commerce development",
        "SEO optimization",
        "Performance optimization",
        "Technical support and maintenance ",
        "Client communication and requirement gathering",
        "Collaborated with design and marketing teams",
        "Implemented responsive design",
        "Tested and debugged applications",

      ]
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
      ]
    }
  ]

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 mb-8 shadow-lg"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{exp.title}</h3>
                  <h4 className="text-xl text-blue-600 font-semibold">{exp.company}</h4>
                </div>
                <div className="flex items-center gap-4 mt-2 lg:mt-0">
                  <div className="flex items-center gap-1 text-gray-600">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-4">{exp.description}</p>

              <div>
                <h5 className="font-semibold text-gray-800 mb-2">Key Achievements:</h5>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )

  //  {/* Additional Experience Section */}
  //       <motion.div
  //         initial={{ opacity: 0, y: 30 }}
  //         whileInView={{ opacity: 1, y: 0 }}
  //         transition={{ duration: 0.6, delay: 0.3 }}
  //         viewport={{ once: true }}
  //         className="mt-16 text-center"
  //       >
  //         <h4 className="text-2xl font-bold text-gray-800 mb-8">Additional Experience</h4>
  //         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
  //           <div className="bg-gray-50 p-6 rounded-lg">
  //             <h5 className="font-semibold text-gray-800 mb-2">Software Engineering Training</h5>
  //             <p className="text-gray-600 text-sm">Ministry of Interior</p>
  //             <p className="text-gray-500 text-xs">Feb 2021 – Apr 2021</p>
  //           </div>
  //           <div className="bg-gray-50 p-6 rounded-lg">
  //             <h5 className="font-semibold text-gray-800 mb-2">Technical Support</h5>
  //             <p className="text-gray-600 text-sm">Surgical Team Project</p>
  //             <p className="text-gray-500 text-xs">2018 – 2019</p>
  //           </div>
  //           <div className="bg-gray-50 p-6 rounded-lg">
  //             <h5 className="font-semibold text-gray-800 mb-2">Team Supervisor</h5>
  //             <p className="text-gray-600 text-sm">Injaz Digital Challenges</p>
  //             <p className="text-gray-500 text-xs">Represented Oman</p>
  //           </div>
  //           <div className="bg-gray-50 p-6 rounded-lg">
  //             <h5 className="font-semibold text-gray-800 mb-2">Event Organizer</h5>
  //             <p className="text-gray-600 text-sm">4th iTech Marathon</p>
  //             <p className="text-gray-500 text-xs">2019</p>
  //           </div>
  //         </div>
  //       </motion.div>
}