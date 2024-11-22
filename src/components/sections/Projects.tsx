'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const projects = [
  {
    title: 'Patent Analysis Platform',
    description:
      'A comprehensive platform for exploring and analyzing patents in Education and AI, featuring web scraping, data warehousing, and dynamic visualizations.',
    image: '/projects/patent-analysis.jpg',
    link: '#',
    stack: [
      'Flask',
      'Spark',
      'PostgreSQL',
      'MongoDB Atlas',
      'Power BI',
      'Chart.js',
    ],
    highlights: [
      'Empowered users to explore and analyze patents efficiently',
      'Leveraged web scraping and APIs for data collection',
      'Built comprehensive PowerBI dashboards with Chart.js integration',
      'Implemented a data warehouse for optimized querying',
    ],
  },
  {
    title: 'Real-Time People Monitoring',
    description:
      'A real-time foot traffic monitoring system using lambda architecture and computer vision, providing dynamic insights across different zones.',
    image: '/projects/monitoring.jpg',
    link: '#',
    stack: [
      'Docker',
      'HDFS',
      'Kafka',
      'Spark',
      'Cassandra',
      'ClickHouse',
      'Power BI',
      'YOLO',
    ],
    highlights: [
      'Implemented real-time monitoring across multiple zones',
      'Used lambda architecture for efficient data processing',
      'Integrated Kafka for seamless event streaming',
      'Created dynamic Power BI dashboards for live insights',
    ],
  },
  {
    title: 'HelpDesk Analytics Dashboard',
    description:
      'A comprehensive dashboard for tracking helpdesk tickets and incidents, providing insights by employee and team performance.',
    image: '/projects/helpdesk.jpg',
    link: '#',
    stack: ['Power BI', 'DAX', 'Power BI Service'],
    highlights: [
      'Developed tracking system for tickets and incidents',
      'Performed advanced data preprocessing with Power Query',
      'Created interactive visualizations and key indicators',
      'Deployed and managed workspace in Power BI Service',
    ],
  },
  {
    title: 'Political Opinions Analysis',
    description:
      'Analysis of international opinions on the Palestinian-Israeli conflict through YouTube comments using advanced NLP techniques.',
    image: '/projects/opinions.jpg',
    link: '#',
    stack: [
      'BERT',
      'Hugging Face',
      'Azure Translator',
      'Scikit-learn',
      'Apify',
    ],
    highlights: [
      'Analyzed international opinions through YouTube comments',
      'Implemented web scraping and manual data labeling',
      'Fine-tuned BERT for sentiment analysis',
      'Integrated Azure Translator for multi-language support',
    ],
  },
]

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-28 py-16 md:py-20 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container space-y-8"
      >
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
          <p className="text-muted-foreground">
            A selection of my most impactful data engineering projects.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg border bg-card shadow-sm"
            >
              <div className="aspect-video overflow-hidden">
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-background/90" />
                {/* Add project image here */}
                <div className="h-full w-full bg-muted" />
              </div>

              <div className="relative z-20 -mt-16 space-y-4 p-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{project.title}</h3>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 shrink-0"
                      asChild
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                        <span className="sr-only">View project</span>
                      </a>
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="ml-4 list-disc space-y-2 text-sm text-muted-foreground">
                    {project.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects