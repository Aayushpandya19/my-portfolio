'use client';

import { Github, Linkedin, Instagram, Heart } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Aayushpandya19', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/aayush-pandya-44ba2a2b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/aayush_1819/', label: 'Instagram' },
  ];  

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground flex items-center">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by  Aayush Pandya
            </p>
            {/* <p className="text-sm text-muted-foreground mt-1">
              © 2025 All rights reserved.
            </p> */}
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          {/* <p className="text-sm text-muted-foreground">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p> */}
          <p className="text-sm text-muted-foreground">
            © 2025 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}