import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Headphones, Target, Users, TrendingUp, Heart, Lightbulb, Globe, Zap } from 'lucide-react'

export default function AboutPage() {
  const stats = [
    { label: 'Episodes Published', value: '13+', icon: Headphones },
    { label: 'Monthly Listeners', value: '10k+', icon: Users },
    { label: 'Countries Reached', value: '25+', icon: Globe },
    { label: 'Average Rating', value: '4.8★', icon: Heart }
  ]

  const topics = [
    { 
      title: 'LinkedIn Timeline Talk', 
      description: 'Real-time analysis of trending marketing content and social media conversations',
      icon: '🔗' 
    },
    { 
      title: 'Marketing Strategy', 
      description: 'Data-driven approaches to modern marketing challenges and opportunities',
      icon: '🎯' 
    },
    { 
      title: 'AI and Business', 
      description: 'How artificial intelligence is reshaping marketing and business operations',
      icon: '🤖' 
    },
    { 
      title: 'Startup Culture', 
      description: 'Growth strategies, branding insights, and lessons from the startup ecosystem',
      icon: '🚀' 
    },
    { 
      title: 'Consumer Psychology', 
      description: 'Understanding what drives consumer behavior and purchasing decisions',
      icon: '🧠' 
    },
    { 
      title: 'Digital Trends', 
      description: 'Staying ahead of the curve with emerging digital marketing trends',
      icon: '📱' 
    }
  ]

  return (
    <div className="min-h-screen podcast-gradient">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-secondary-100 text-secondary-800 border-secondary-200 mb-6">
            🎙️ About Our Podcast
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">
            Click, Brand, and Beyond
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Your go-to podcast for marketing professionals seeking insights on AI, branding, 
            and digital business trends from real-world practitioners.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/80 rounded-lg p-8 shadow-sm">
            <div className="text-center mb-8">
              <Target className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-primary-800 mb-4">Our Mission</h2>
            </div>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              We believe that great marketing comes from understanding the intersection of human psychology, 
              technology, and business strategy. Our mission is to make complex marketing concepts accessible 
              to professionals at all levels, while providing actionable insights that can be implemented immediately.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              Through real-world examples, case studies, and honest discussions about what works (and what doesn't), 
              we aim to bridge the gap between marketing theory and practice.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/80 rounded-lg p-6 text-center shadow-sm">
                <stat.icon className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary-800 mb-1">{stat.value}</div>
                <div className="text-sm text-text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* What We Cover */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">What We Cover</h2>
            <p className="text-lg text-text-secondary">
              From LinkedIn timeline discussions to AI impact analysis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <div key={index} className="bg-white/80 rounded-lg p-6 shadow-sm">
                <div className="text-3xl mb-4">{topic.icon}</div>
                <h3 className="text-xl font-semibold text-primary-800 mb-3">{topic.title}</h3>
                <p className="text-text-secondary">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What Makes Us Different */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/80 rounded-lg p-8 shadow-sm">
            <div className="text-center mb-8">
              <Lightbulb className="w-12 h-12 text-secondary-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-primary-800 mb-4">What Makes Us Different</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-secondary-600" />
                  Practical Focus
                </h3>
                <p className="text-text-secondary mb-4">
                  We don't just talk theory. Every episode includes actionable insights you can 
                  apply to your marketing efforts immediately.
                </p>
                
                <h3 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-secondary-600" />
                  Real-Time Analysis
                </h3>
                <p className="text-text-secondary">
                  Our LinkedIn Timeline Talk segments provide live analysis of trending marketing 
                  content and social media conversations.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-secondary-600" />
                  Diverse Perspectives
                </h3>
                <p className="text-text-secondary mb-4">
                  With backgrounds in different areas of marketing, our hosts bring complementary 
                  viewpoints to every discussion.
                </p>
                
                <h3 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-secondary-600" />
                  Global Yet Local
                </h3>
                <p className="text-text-secondary">
                  We discuss global marketing trends while providing specific insights for 
                  Indian markets and emerging economies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Format */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Our Format</h2>
            <p className="text-lg text-text-secondary">
              Each episode is designed to deliver maximum value in minimum time
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold text-primary-800 mb-2">Focused Topics</h3>
              <p className="text-text-secondary text-sm">
                Each episode focuses on 1-2 key topics for deep, actionable insights
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="font-semibold text-primary-800 mb-2">Optimal Length</h3>
              <p className="text-text-secondary text-sm">
                20-40 minute episodes that fit into your commute or coffee break
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent-mint-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="font-semibold text-primary-800 mb-2">Actionable Insights</h3>
              <p className="text-text-secondary text-sm">
                Every episode ends with clear takeaways you can implement
              </p>
            </div>
          </div>
        </div>

        {/* Join Our Community */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary-800 text-white rounded-lg p-8 text-center">
            <Headphones className="w-16 h-16 mx-auto mb-6 text-primary-200" />
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-xl text-primary-100 mb-6 max-w-2xl mx-auto">
              Be part of a growing community of marketing professionals who are shaping 
              the future of digital marketing and branding.
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
                  Start Listening
                </a>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-primary-300 text-primary-100 hover:bg-primary-700"
              >
                <Link href="/subscribe">
                  Subscribe to Newsletter
                </Link>
              </Button>
            </div>

            <div className="mt-8 pt-6 border-t border-primary-700">
              <p className="text-primary-200 text-sm">
                Have questions or topic suggestions? 
                <a href="mailto:hello@clickbrandandbeyond.com" className="underline hover:text-white ml-1">
                  Get in touch!
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}