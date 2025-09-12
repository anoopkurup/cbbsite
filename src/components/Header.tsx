'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Headphones, Menu, X } from 'lucide-react'
import { useState } from 'react'

const navigation = [
  { name: 'Episodes', href: '/episodes' },
  { name: 'Hosts', href: '/hosts' },
  { name: 'About', href: '/about' },
  { name: 'Subscribe', href: '/subscribe' },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-primary-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-2 rounded-lg">
              <Headphones className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-primary-800">Click, Brand, and Beyond</div>
              <div className="text-xs text-text-muted">Marketing & Business Podcast</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Button
                key={item.name}
                variant={pathname === item.href ? "default" : "ghost"}
                asChild
                className={pathname === item.href 
                  ? "bg-primary-100 text-primary-800 hover:bg-primary-200" 
                  : "text-text-secondary hover:text-primary-700 hover:bg-primary-50"
                }
              >
                <Link href={item.href}>{item.name}</Link>
              </Button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:block">
            <Button
              asChild
              className="bg-secondary-500 hover:bg-secondary-600 text-white"
            >
              <a 
                href="https://open.spotify.com/show/7lnAk0uJ73hwr7AVN93nv3" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Listen Now
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <Separator className="my-2" />
            <nav className="flex flex-col space-y-2 pb-4">
              {navigation.map((item) => (
                <Button
                  key={item.name}
                  variant={pathname === item.href ? "default" : "ghost"}
                  asChild
                  className={`justify-start ${pathname === item.href 
                    ? "bg-primary-100 text-primary-800" 
                    : "text-text-secondary hover:text-primary-700 hover:bg-primary-50"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link href={item.href}>{item.name}</Link>
                </Button>
              ))}
              <Separator className="my-2" />
              <Button
                asChild
                className="bg-secondary-500 hover:bg-secondary-600 text-white justify-start"
              >
                <a 
                  href="https://open.spotify.com/show/7lnAk0uJ73hwr7AVN93nv3" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Listen on Spotify
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}