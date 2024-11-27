'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Send } from 'lucide-react'

import ContactForm from '@/components/sections/ContactForm'

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-28 py-16 md:py-20 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container space-y-8"
      >
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get in Touch
          </h2>
          <p className="text-muted-foreground">
            Feel free to reach out for collaborations or just a friendly chat.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <p className="text-muted-foreground">
                I am open to opportunities in Data Engineering, AI/ML, and Cloud Computing. 
                Particularly interested in projects involving AI agents, big data processing, 
                and cloud-native solutions. Let's connect and explore innovative data-driven solutions together!
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:abdelghaforelgharbaoui@gmail.com"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                <span>abdelghaforelgharbaoui@gmail.com</span>
              </a>
              <a
                href="https://github.com/abdelghafo-gh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Github className="h-4 w-4" />
                <span>abdelghafo-gh</span>
              </a>
              <a
                href="https://www.linkedin.com/in/abdelghafor-elgharbaoui-16a276202/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" />
                <span>abdelghafor-elgharbaoui</span>
              </a>
            </div>
          </motion.div>

          <ContactForm />
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
