'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="scroll-mt-28 py-16 md:py-20 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container space-y-8"
      >
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            About Me
          </h2>
          <p className="text-muted-foreground">
            Get to know more about my background and expertise.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-8">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="flex-1 space-y-4">
              <h3 className="text-xl font-semibold">Background</h3>
              <p className="text-muted-foreground">
                I am a passionate Data Engineering student at the National School of
                Applied Sciences Al Hoceima (ENSAH), with a strong foundation in
                building scalable data solutions and modern web applications. My
                expertise spans across data engineering, machine learning, and
                full-stack development.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Education</h3>
            <div className="rounded-lg border bg-card p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">
                    National School of Applied Sciences Al Hoceima
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Data Engineering
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Sep 2020 - Jul 2025
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Additional Information</h3>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>
                <strong>Languages:</strong> English and French
              </li>
              <li>
                <strong>Continuous Learning:</strong> Committed to staying updated
                with the latest data technologies and techniques
              </li>
              <li>
                <strong>Social Work:</strong> Active participant in social and
                educational initiatives with the Quran Club at school
              </li>
              <li>
                <strong>Community Engagement:</strong> Participated in national
                events such as MNPC23 (Moroccan National Programming Contest) and 
                MoroccoAI hackathon 2024
              </li>
            </ul>
          </div>

          <div className="flex justify-center">
            <Button size="lg" asChild>
              <a href="assets/docs/Abdelghafor_Elgharbaoui_CV.pdf" download className="group">
                Download Resume
                <Download className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
