'use client'

import { motion } from 'framer-motion'
import { Building2, Calendar } from 'lucide-react'

const experiences = [
  {
    title: 'Data and AI Intern',
    company: 'Shiftbricks',
    location: 'Remote',
    period: 'Jun - Sep 2024',
    description: [
      'Developed an AI Legal Assistant app for browsing and searching legal documents with chatbot integration.',
      'Utilized MongoDB Atlas as a vector store for semantic search, enhancing chatbot response generation.',
      'Implemented citation extraction for AI-generated responses and search results.',
      'Developed a document browser with citation-based navigation.',
      'Integrated next-intl for multilingual support.'
    ],
    stack: [
      'FastAPI',
      'MongoDB Atlas',
      'Langchain',
      'NextJS',
      'Tailwind CSS',
      'PostgreSQL',
      'Docker'
    ],
  },
  {
    title: 'Backend Developer Intern',
    company: '3D Smart Factory',
    location: 'Remote',
    period: 'Jul - Oct 2024',
    description: [
      'Implemented Authentication and Authorization in Users Service using Spring Security.',
      'Developed a Notification Service using Kafka for asynchronous communication.',
      'Set up comprehensive monitoring with Grafana, Prometheus, Loki, and Tempo.',
      'Integrated Cloudinary for efficient media file storage and management.',
    ],
    stack: [
      'Spring Boot',
      'Kafka',
      'Cloudinary',
      'Prometheus',
      'Grafana',
      'Loki',
      'Tempo',
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-28 py-16 md:py-20 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container space-y-8"
      >
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Professional Experience
          </h2>
          <p className="text-muted-foreground">
            My journey in data engineering and software development.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg border bg-card p-6 shadow-sm"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-4 text-lg">
                    <h3 className="font-semibold">{experience.title}</h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{experience.period}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Building2 className="h-4 w-4" />
                    <span>
                      {experience.company} • {experience.location}
                    </span>
                  </div>
                </div>

                <ul className="ml-4 list-disc space-y-2 text-sm text-muted-foreground">
                  {experience.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {experience.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
