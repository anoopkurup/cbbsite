import Link from 'next/link'
import { Headphones, Linkedin, Twitter, Instagram, Mail } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

const platformLinks = [
  { name: 'Spotify', url: 'https://open.spotify.com/show/7lnAk0uJ73hwr7AVN93nv3' },
  { name: 'Apple Podcasts', url: 'https://podcasts.apple.com/podcast/click-brand-beyond' },
  { name: 'Google Podcasts', url: 'https://podcasts.google.com/feed/click-brand-beyond' },
  { name: 'RSS Feed', url: 'https://clickbrandandbeyond.com/feed.xml' },
]

const quickLinks = [
  { name: 'Episodes', href: '/episodes' },
  { name: 'Hosts', href: '/hosts' },
  { name: 'About', href: '/about' },
  { name: 'Subscribe', href: '/subscribe' },
]

export function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-2 rounded-lg">
                <Headphones className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-xl">Click, Brand, and Beyond</div>
                <div className="text-sm text-primary-200">Marketing & Business Insights Podcast</div>
              </div>
            </div>
            <p className="text-primary-100 max-w-md mb-6">
              Join Anoop Kurup and Nisha Prakash as they explore LinkedIn timelines, marketing trends, 
              AI impact on business, startup culture, and the evolving landscape of digital 
              marketing and branding.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://linkedin.com/company/click-brand-beyond" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-200 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/clickbrandandbeyond" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-200 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/clickbrandandbeyond" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-200 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="mailto:hello@clickbrandandbeyond.com" 
                className="text-primary-200 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-primary-200 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Listen On */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Listen On</h3>
            <ul className="space-y-2">
              {platformLinks.map((platform) => (
                <li key={platform.name}>
                  <a 
                    href={platform.url}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-200 hover:text-white transition-colors"
                  >
                    {platform.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-primary-700 mb-6" />
        
        {/* Newsletter Signup */}
        <div className="bg-primary-800 rounded-lg p-6 mb-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="font-semibold text-lg mb-2">Stay Updated</h3>
              <p className="text-primary-200">
                Get the latest episodes and marketing insights delivered to your inbox.
              </p>
            </div>
            <Button
              asChild
              className="bg-secondary-500 hover:bg-secondary-600 text-white"
            >
              <Link href="/subscribe">
                Subscribe to Newsletter
              </Link>
            </Button>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-primary-200 text-sm">
          <p>
            © {new Date().getFullYear()} Click, Brand, and Beyond. All rights reserved.
          </p>
          <p className="mt-2">
            Hosted by Anoop Kurup and Nisha Prakash • Made with ❤️ for marketing professionals
          </p>
        </div>
      </div>
    </footer>
  )
}