'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const projects = [
  {
    "title": "Moroccan Universities Scopus Analysis",
    "description": "A comprehensive data analytics platform for analyzing academic publications from Moroccan universities using Scopus data, featuring data warehousing, ETL pipelines, and interactive visualizations. Deployed on AWS EC2 for scalable access.",
    "image": "assets/images/scopus-data-pipeline.png",
    "link": "https://github.com/abdelghafor-gh/Moroccan-Universities-Scopus-Analysis",
    "stack": [
        "Python",
        "PostgreSQL",
        "Snowflake",
        "Apache Airflow",
        "Power BI",
        "Pandas",
        "DAX",
        "Power Query",
        "Jupyter",
        "AWS EC2"
    ],
    "highlights": [
        "Built a comprehensive star schema data warehouse for academic publication analysis",
        "Implemented ETL pipelines using Apache Airflow for data orchestration",
        "Created interactive Power BI dashboards for publication trend analysis",
        "Developed data transformation scripts for processing Scopus academic data",
        "Designed a scalable architecture supporting multiple warehouse options (PostgreSQL/Snowflake)",
        "Deployed the entire solution on AWS EC2 for reliable cloud hosting"
    ]
  },
  {
    "title": "AI Trends ChatBot",
    "description": "A modern AI-powered chat application with a sophisticated Azure-based data pipeline for collecting, processing, and analyzing AI trends in real-time, featuring a multi-layer data architecture and intelligent search capabilities.",
    "image": "assets/images/ai-trends-chatbot-data-pipeline.png",
    "link": "https://github.com/abdelghafor-gh/AI-Trends-ChatBot",
    "stack": [
        "Azure Functions",
        "Azure Databricks",
        "Azure Data Factory",
        "Cosmos DB",
        "Azure AI Search",
        "Event Grid",
        "Azure Static Web App",
        "NextJS",
        "Supabase",
        "FastAPI",
        "LangGraph",
        "Azure Container app",
        "Terraform",
        "GitHub actions",
      ],
    "highlights": [
        "Engineered a robust data pipeline with Azure Functions for automated RSS feed collection",
        "Implemented a three-layer data architecture (Bronze/Silver/Gold) using Data Lake, Cosmos DB, and AI Search",
        "Automated infrastructure deployment using Terraform for scalability and maintainability",
        "Developed Databricks notebooks for sophisticated data transformation and embedding generation",
        "Built a real-time chat interface with AI-powered insights from processed data",
        "Created secure authentication system and interactive trend visualizations"
    ]
  },
  {
    title: 'Patent Analysis Platform',
    description:
      'A comprehensive platform for exploring and analyzing patents in Education and AI, featuring web scraping, data warehousing, and dynamic visualizations.',
    image: 'assets/images/e-patent-data-transformation.png',
    link: 'https://github.com/abdelghafor-gh/E-Patent',
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
    title: 'Real-Time Foot Traffic Monitoring',
    description:
      'A real-time foot traffic monitoring system using lambda architecture and computer vision, providing dynamic insights across different zones.',
    image: 'assets/images/real-time-lambda-architecture.png',
    link: 'https://github.com/abdelghafor-gh/Real-Time-Foot-Traffic-Monitoring-Lambda-Architecture',
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
  // {
  //   title: 'Management Control Dashboard',
  //   description:
  //     'Developement of a Power BI dashboard to compare sales performance across two time periods, providing actionable insights through interactive visuals and robust data modeling.',
  //   image: 'assets/images/management-control.png',
  //   link: 'https://github.com/abdelghafor-gh/Management-Control-Start-Schema-Dashboard',
  //   stack: ['Power BI', 'DAX', 'Power BI Service'],
  //   highlights: [
  //     'Compared Total Sales, Profit, and Units Sold across two time periods',
  //     'Performed advanced data preprocessing with Power Query',
  //     'Utilized Start Schema for efficient relationships and performance analysis',
  //     'Designed interactive visuals and filters for user-friendly analysis'
  //   ],
  // },
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
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="h-full w-full bg-muted" />
              </div>

              <div className="relative z-20 -mt-16 space-y-4 p-6">
                <div className="space-y-4">
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
