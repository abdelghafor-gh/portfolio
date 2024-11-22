'use client'

import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="border-t border-border/40">
      <div className="container flex flex-col items-center gap-4 py-8 md:flex-row md:justify-between">
        <p className="text-center text-sm text-muted-foreground">
          {new Date().getFullYear()} Abdelghafor Elgharbaoui. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Abdelghafo-az"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="GitHub Profile"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/abdelghafor-elgharbaoui-16a276202/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:abdelghaforelgharbaoui@gmail.com"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Send Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
