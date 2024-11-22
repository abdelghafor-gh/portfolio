'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Github, Linkedin, Mail, Send } from 'lucide-react'

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
                href="https://github.com/Abdelghafo-az"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Github className="h-4 w-4" />
                <span>github.com/Abdelghafo-az</span>
              </a>
              <a
                href="https://www.linkedin.com/in/abdelghafor-elgharbaoui-16a276202/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" />
                <span>linkedin.com/in/abdelghafor-elgharbaoui</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 rounded-lg border bg-card p-6"
          >
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Send a Message</h3>
              <p className="text-sm text-muted-foreground">
                I'll get back to you as soon as possible.
              </p>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-muted-foreground"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-muted-foreground"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-background"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-muted-foreground"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Data Engineering Project / AI Collaboration / Cloud Architecture"
                  className="bg-background"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-muted-foreground"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your data engineering needs, AI project ideas, or cloud infrastructure challenges..."
                  className="min-h-[120px] resize-none bg-background"
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
