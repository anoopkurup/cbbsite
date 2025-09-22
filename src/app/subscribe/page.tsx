'use client'

import { useState } from 'react'
import Link from 'next/link'
import { platforms } from '@/data/platforms'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Play, 
  Mail, 
  Bell, 
  ExternalLink, 
  Smartphone, 
  Rss,
  CheckCircle
} from 'lucide-react'

export default function SubscribePage() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // In a real app, this would submit to a newsletter service
      setIsSubscribed(true)
      setEmail('')
    }
  }

  const podcastPlatforms = [
    {
      name: 'Spotify',
      description: 'Our primary platform with the latest episodes',
      url: 'https://open.spotify.com/show/7lnAk0uJ73hwr7AVN93nv3',
      icon: '🎵',
      featured: true
    },
    {
      name: 'Apple Podcasts',
      description: 'Listen on your iPhone, iPad, or Mac',
      url: 'https://podcasts.apple.com/podcast/click-brand-beyond',
      icon: '🍎',
      featured: true
    },
    {
      name: 'Google Podcasts',
      description: 'Stream on Android and Google devices',
      url: 'https://podcasts.google.com/feed/click-brand-beyond',
      icon: '🎙️',
      featured: true
    },
    {
      name: 'Amazon Music',
      description: 'Available for Amazon Music subscribers',
      url: 'https://music.amazon.com/podcasts/click-brand-beyond',
      icon: '📻',
      featured: false
    },
    {
      name: 'RSS Feed',
      description: 'For your favorite podcast app',
      url: 'https://clickbrandandbeyond.com/feed.xml',
      icon: '🔗',
      featured: false
    }
  ]

  const socialPlatforms = [
    {
      name: 'LinkedIn',
      description: 'Follow us for updates and marketing insights',
      url: 'https://linkedin.com/company/click-brand-beyond',
      icon: '💼'
    },
    {
      name: 'Twitter',
      description: 'Real-time updates and discussions',
      url: 'https://twitter.com/clickbrandandbeyond',
      icon: '🐦'
    },
    {
      name: 'Instagram',
      description: 'Behind-the-scenes and visual content',
      url: 'https://instagram.com/clickbrandandbeyond',
      icon: '📸'
    }
  ]

  return (
    <div className="min-h-screen podcast-gradient">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-secondary-100 text-secondary-800 border-secondary-200 mb-6">
            🔔 Never Miss an Episode
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-primary-800 mb-6">
            Subscribe & Stay Updated
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Choose your preferred platform and join thousands of marketing professionals 
            who get weekly insights on branding, AI, and business strategy.
          </p>
        </div>

        {/* Podcast Platforms */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Listen on Your Favorite Platform</h2>
            <p className="text-text-secondary">New episodes released every week</p>
          </div>

          {/* Featured Platforms */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {podcastPlatforms.filter(p => p.featured).map((platform) => (
              <div key={platform.name} className="bg-white/80 rounded-lg p-6 shadow-sm text-center group hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{platform.icon}</div>
                <h3 className="text-xl font-semibold text-primary-800 mb-2">{platform.name}</h3>
                <p className="text-text-secondary text-sm mb-4">{platform.description}</p>
                <Button 
                  asChild 
                  className="w-full bg-secondary-500 hover:bg-secondary-600 text-white"
                >
                  <a 
                    href={platform.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Play className="w-4 h-4" />
                    Listen Now
                  </a>
                </Button>
              </div>
            ))}
          </div>

          {/* Other Platforms */}
          <div className="grid md:grid-cols-2 gap-4">
            {podcastPlatforms.filter(p => !p.featured).map((platform) => (
              <div key={platform.name} className="bg-white/60 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{platform.icon}</span>
                  <div>
                    <div className="font-medium text-primary-800">{platform.name}</div>
                    <div className="text-sm text-text-muted">{platform.description}</div>
                  </div>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a href={platform.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>

        <Separator className="max-w-4xl mx-auto mb-16 bg-primary-200" />

        {/* Newsletter Signup */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/80 rounded-lg p-8 shadow-sm">
            <div className="text-center mb-8">
              <Mail className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-primary-800 mb-4">
                Join Our Newsletter
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Get episode highlights, marketing insights, and exclusive content 
                delivered to your inbox every week.
              </p>
            </div>

            {!isSubscribed ? (
              <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Button type="submit" className="bg-secondary-500 hover:bg-secondary-600 text-white">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-text-muted text-center mt-3">
                  No spam, unsubscribe at any time. We respect your privacy.
                </p>
              </form>
            ) : (
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  Thanks for subscribing!
                </h3>
                <p className="text-text-secondary">
                  You'll receive our next newsletter with the latest episode highlights 
                  and marketing insights.
                </p>
              </div>
            )}

            <div className="grid md:grid-cols-3 gap-6 mt-8 pt-6 border-t border-primary-100">
              <div className="text-center">
                <Bell className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                <div className="font-semibold text-primary-800 text-sm mb-1">Weekly Updates</div>
                <div className="text-xs text-text-muted">Every Tuesday</div>
              </div>
              <div className="text-center">
                <Smartphone className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                <div className="font-semibold text-primary-800 text-sm mb-1">Mobile Optimized</div>
                <div className="text-xs text-text-muted">Read anywhere</div>
              </div>
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                <div className="font-semibold text-primary-800 text-sm mb-1">Exclusive Content</div>
                <div className="text-xs text-text-muted">Subscriber only</div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">
              Follow Us on Social Media
            </h2>
            <p className="text-text-secondary">
              Stay connected for real-time updates and discussions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {socialPlatforms.map((platform) => (
              <div key={platform.name} className="bg-white/60 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">{platform.icon}</div>
                <h3 className="font-semibold text-primary-800 mb-2">{platform.name}</h3>
                <p className="text-sm text-text-secondary mb-4">{platform.description}</p>
                <Button variant="outline" size="sm" asChild className="w-full">
                  <a href={platform.url} target="_blank" rel="noopener noreferrer">
                    Follow
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-primary-800 text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-primary-100 mb-6 max-w-2xl mx-auto">
              Pick your platform and start listening to marketing insights 
              that can transform your approach to business and branding.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-secondary-500 hover:bg-secondary-600 text-white"
              >
                <a 
                  href="https://open.spotify.com/show/7lnAk0uJ73hwr7AVN93nv3" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Listen on Spotify
                </a>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-primary-300 text-primary-100 hover:bg-primary-700"
              >
                <Link href="/episodes">
                  Browse Episodes
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}