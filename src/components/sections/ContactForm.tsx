'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Github, Linkedin, Mail, Send } from 'lucide-react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useToast } from '@/components/ui/use-toast'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const ContactForm = () => {
  const { toast, showToast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      showToast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    // Check environment variables before sending
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      showToast({
        title: "Configuration Error",
        description: "Email service is not properly configured.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Abdelghafor',
          reply_to: formData.email,
        },
        publicKey
      )

      if (result.status === 200) {
        showToast({
          title: "Success!",
          description: "Your message has been sent successfully.",
        })
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
      }
    } catch (error) {
      showToast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
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

      <form className="space-y-4" onSubmit={handleSubmit}>
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
              name="name"
              placeholder="John Doe"
              className="bg-background"
              value={formData.name}
              onChange={handleChange}
              required
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
              name="email"
              type="email"
              placeholder="john@example.com"
              className="bg-background"
              value={formData.email}
              onChange={handleChange}
              required
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
            name="subject"
            placeholder="Data Engineering Project / AI Collaboration / Cloud Architecture"
            className="bg-background"
            value={formData.subject}
            onChange={handleChange}
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
            name="message"
            placeholder="Tell me about your data engineering needs, AI project ideas, or cloud infrastructure challenges..."
            className="min-h-[120px] resize-none bg-background"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            'Sending...'
          ) : (
            <>
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>
    </motion.div>
  )
}

export default ContactForm