import Link from 'next/link'
import { hosts } from '@/data/hosts'
import { getEpisodes } from '@/lib/episodesService'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Users, Linkedin, Twitter, Instagram, Mail, ExternalLink } from 'lucide-react'

export default async function HostsPage() {
  const episodes = await getEpisodes()
  
  const getHostEpisodes = (hostName: string) => {
    // In a real app, this would filter episodes where the host participated
    // For now, we'll show recent episodes as examples
    return episodes.slice(0, 3)
  }

  return (
    <div className="min-h-screen podcast-gradient">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            Meet Your Hosts
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Marketing professionals passionate about sharing insights on branding, 
            AI, startup culture, and the evolving digital landscape
          </p>
        </div>

        {/* Hosts Profiles */}
        <div className="max-w-6xl mx-auto space-y-16">
          {hosts.map((host, index) => (
            <div key={host.id} className="bg-white/80 rounded-lg shadow-sm overflow-hidden">
              <div className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  {/* Host Photo Placeholder */}
                  <div className={`flex justify-center ${index % 2 === 1 ? 'lg:order-3' : ''}`}>
                    <div className="aspect-video w-full max-w-md mx-auto bg-gradient-to-br from-primary-400 to-secondary-400 rounded-2xl flex items-center justify-center shadow-lg">
                      <Users className="w-24 h-24 text-white" />
                    </div>
                  </div>

                  {/* Host Info */}
                  <div className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="mb-6">
                      <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-2">
                        {host.name}
                      </h2>
                      <p className="text-lg text-secondary-600 font-medium mb-4">
                        {host.role}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {host.linkedin && (
                          <a 
                            href={host.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 transition-colors"
                          >
                            <Linkedin className="w-4 h-4" />
                            <span>LinkedIn</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                        {host.twitter && (
                          <a 
                            href={host.twitter} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 transition-colors"
                          >
                            <Twitter className="w-4 h-4" />
                            <span>Twitter</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                        {host.instagram && (
                          <a 
                            href={host.instagram} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 transition-colors"
                          >
                            <Instagram className="w-4 h-4" />
                            <span>Instagram</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                        {host.email && (
                          <a 
                            href={`mailto:${host.email}`}
                            className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 transition-colors"
                          >
                            <Mail className="w-4 h-4" />
                            <span>Email</span>
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="prose max-w-none">
                      <p className="text-text-secondary leading-relaxed text-lg mb-6">
                        {host.bio}
                      </p>
                    </div>

                    {/* Host's Areas of Expertise */}
                    <div className="mb-6">
                      <h3 className="font-semibold text-primary-800 mb-3">Areas of Expertise:</h3>
                      <div className="flex flex-wrap gap-2">
                        {host.name === 'Anoop Kurup' ? (
                          <>
                            <Badge className="bg-primary-100 text-primary-800">Marketing Strategy</Badge>
                            <Badge className="bg-secondary-100 text-secondary-800">Business Development</Badge>
                            <Badge className="bg-accent-mint-100 text-accent-mint-800">Digital Trends</Badge>
                            <Badge className="bg-accent-peach-100 text-accent-peach-800">LinkedIn Marketing</Badge>
                          </>
                        ) : (
                          <>
                            <Badge className="bg-primary-100 text-primary-800">Brand Analysis</Badge>
                            <Badge className="bg-secondary-100 text-secondary-800">Consumer Psychology</Badge>
                            <Badge className="bg-accent-mint-100 text-accent-mint-800">Market Research</Badge>
                            <Badge className="bg-accent-peach-100 text-accent-peach-800">Brand Positioning</Badge>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Recent Episodes */}
                    <div>
                      <h3 className="font-semibold text-primary-800 mb-3">Recent Episodes:</h3>
                      <div className="space-y-2">
                        {getHostEpisodes(host.name).slice(0, 3).map((episode) => (
                          <div key={episode.id} className="flex items-center justify-between p-3 bg-background-subtle rounded">
                            <div className="flex-1 min-w-0">
                              <Link 
                                href={`/episodes/${episode.slug}`}
                                className="font-medium text-primary-800 hover:text-primary-600 transition-colors truncate block"
                              >
                                Episode {episode.episodeNumber}: {episode.title}
                              </Link>
                              <p className="text-sm text-text-muted">{episode.duration}</p>
                            </div>
                            <Button variant="ghost" size="sm" asChild>
                              <Link href={`/episodes/${episode.slug}`}>
                                View
                              </Link>
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Collaboration Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-white/80 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">
              The Perfect Partnership
            </h2>
            <p className="text-text-secondary text-lg mb-6 max-w-2xl mx-auto">
              Anoop and Nisha Prakash bring complementary expertise to every episode. Their dynamic discussions 
              combine strategic thinking with analytical insights, providing listeners with well-rounded 
              perspectives on marketing and business challenges.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="text-left">
                <h3 className="font-semibold text-primary-800 mb-2">What Makes Them Great:</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Real-world marketing experience</li>
                  <li>• Different but complementary perspectives</li>
                  <li>• Passionate about sharing knowledge</li>
                  <li>• Active in the marketing community</li>
                </ul>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-primary-800 mb-2">Their Mission:</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Make marketing insights accessible</li>
                  <li>• Bridge theory and practice</li>
                  <li>• Foster marketing community</li>
                  <li>• Stay ahead of digital trends</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-primary-800 mb-4">
            Want to Connect?
          </h2>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Have questions, feedback, or topics you'd like us to cover? 
            We'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-secondary-500 hover:bg-secondary-600 text-white">
              <a href="mailto:hello@clickbrandandbeyond.com">
                Send Us an Email
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link href="/episodes">
                Browse All Episodes
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}