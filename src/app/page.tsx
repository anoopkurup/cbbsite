import Link from 'next/link'
import { hosts } from '@/data/hosts'
import { EpisodeCard } from '@/components/EpisodeCard'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Play, Users, TrendingUp, Headphones } from 'lucide-react'
import { getEpisodes, getLatestEpisode, getFeaturedEpisodes } from '@/lib/episodesService'

export default async function Home() {
  const [episodes, latestEpisode, featuredEpisodes] = await Promise.all([
    getEpisodes(),
    getLatestEpisode(),
    getFeaturedEpisodes()
  ])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-secondary-100 text-secondary-800 border-secondary-200 mb-6">
              🎙️ New Episode Weekly
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-800 mb-6">
              Click, Brand, and Beyond
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary mb-4">
              Marketing & Business Insights Podcast
            </p>
            <p className="text-lg text-text-muted max-w-2xl mx-auto mb-8">
              Join Anoop Kurup and Nisha Prakash as they explore LinkedIn timelines, marketing trends, 
              AI impact on business, startup culture, and the evolving landscape of digital marketing and branding.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-secondary-500 hover:bg-secondary-600 text-white px-8"
              >
                <a 
                  href="https://open.spotify.com/show/7lnAk0uJ73hwr7AVN93nv3" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Listen on Spotify
                </a>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="bg-white/80 border-primary-200 text-primary-700 hover:bg-primary-50 px-8"
              >
                <Link href="/episodes">
                  Browse Episodes
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-800">{episodes.length}+</div>
                <div className="text-sm text-text-muted">Episodes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-800">10k+</div>
                <div className="text-sm text-text-muted">Monthly Listeners</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-800">4.8★</div>
                <div className="text-sm text-text-muted">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Episode */}
      <section className="py-16 bg-background-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
                Latest Episode
              </h2>
              <p className="text-lg text-text-secondary">
                Catch up on our most recent insights and discussions
              </p>
            </div>
            
            {latestEpisode && <EpisodeCard episode={latestEpisode} />}
          </div>
        </div>
      </section>

      {/* Featured Episodes */}
      {featuredEpisodes.length > 0 && (
        <section className="py-16 podcast-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
                  Featured Episodes
                </h2>
                <p className="text-lg text-text-secondary">
                  Hand-picked episodes covering the most important topics
                </p>
              </div>
              
              <div className="grid gap-6 lg:grid-cols-1 xl:grid-cols-1">
                {featuredEpisodes.map((episode) => (
                  <EpisodeCard key={episode.id} episode={episode} />
                ))}
              </div>

              <div className="text-center mt-12">
                <Button asChild variant="outline" size="lg" className="bg-white/80 border-primary-200">
                  <Link href="/episodes">
                    View All Episodes
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* About Hosts */}
      <section className="py-16 bg-background-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
                Meet Your Hosts
              </h2>
              <p className="text-lg text-text-secondary">
                Marketing professionals bringing you the latest insights
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {hosts.map((host) => (
                <div key={host.id} className="bg-white/80 rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-800">{host.name}</h3>
                      <p className="text-sm text-text-muted">{host.role}</p>
                    </div>
                  </div>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    {host.bio.substring(0, 200)}...
                  </p>
                  <div className="flex gap-2">
                    {host.linkedin && (
                      <a href={host.linkedin} target="_blank" rel="noopener noreferrer">
                        <Badge variant="outline" className="hover:bg-primary-50">
                          LinkedIn
                        </Badge>
                      </a>
                    )}
                    {host.twitter && (
                      <a href={host.twitter} target="_blank" rel="noopener noreferrer">
                        <Badge variant="outline" className="hover:bg-primary-50">
                          Twitter
                        </Badge>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link href="/hosts">
                  Learn More About Our Hosts
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Topics We Cover */}
      <section className="py-16 bg-background-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Topics We Cover
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              From LinkedIn insights to AI impact on business
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { icon: '🔗', title: 'LinkedIn Timeline Talk', desc: 'Real-time social media analysis' },
                { icon: '🎯', title: 'Marketing Strategy', desc: 'Data-driven marketing approaches' },
                { icon: '🤖', title: 'AI & Business', desc: 'Technology impact on marketing' },
                { icon: '🚀', title: 'Startup Culture', desc: 'Growth and branding insights' }
              ].map((topic, index) => (
                <div key={index} className="bg-white/80 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">{topic.icon}</div>
                  <h3 className="font-semibold text-primary-800 text-sm mb-1">{topic.title}</h3>
                  <p className="text-xs text-text-muted">{topic.desc}</p>
                </div>
              ))}
            </div>

            <Button asChild className="bg-secondary-500 hover:bg-secondary-600 text-white">
              <Link href="/about">
                Learn More About Our Mission
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Headphones className="w-16 h-16 mx-auto mb-6 text-primary-200" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Level Up Your Marketing?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join thousands of marketing professionals who get insights from our podcast 
              and newsletter every week.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-secondary-500 hover:bg-secondary-600 text-white"
              >
                <Link href="/subscribe">
                  Subscribe to Newsletter
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-primary-300 text-primary-100 hover:bg-primary-700"
              >
                <a 
                  href="https://open.spotify.com/show/7lnAk0uJ73hwr7AVN93nv3" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Start Listening
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}