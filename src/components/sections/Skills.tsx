'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'Java', 'R', 'PL/SQL', 'Bash', 'C', 'TypeScript'],
  },
  {
    title: 'Databases',
    skills: [
      'PostgreSQL',
      'Oracle',
      'MySQL',
      'SQL Server',
      'MongoDB',
      'Cassandra',
      'Redis',
    ],
  },
  {
    title: 'Cloud & Data Platforms',
    skills: [
      'Azure Data Factory',
      'Databricks',
      'Snowflake',
      'Azure Kubernetes',
      'Azure Container Registry',
    ],
  },
  {
    title: 'Big Data & ETL',
    skills: [
      'Hadoop',
      'Spark',
      'Kafka',
      'Airflow',
      'dbt',
      'Selenium',
      'Power BI',
    ],
  },
  {
    title: 'Machine Learning & AI',
    skills: [
      'Scikit Learn',
      'Keras',
      'LangChain',
      'NLTK',
      'spaCy',
      'Hugging Face',
    ],
  },
  {
    title: 'DevOps & Monitoring',
    skills: [
      'Linux',
      'Git',
      'Docker',
      'Kubernetes',
      'GitHub Actions',
      'GitLab CI/CD',
      'Prometheus',
      'Grafana',
    ],
  },
  {
    title: 'Web Development',
    skills: [
      'Spring Boot',
      'FastAPI',
      'Flask',
      'Next.js',
      'Tailwind CSS',
    ],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-28 py-16 md:py-20 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container space-y-8"
      >
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Technical Skills
          </h2>
          <p className="text-muted-foreground">
            A comprehensive list of my technical expertise and tools I work with.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg border bg-card p-6 shadow-sm"
            >
              <div className="space-y-4">
                <h3 className="font-semibold">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {skill}
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

export default Skills
