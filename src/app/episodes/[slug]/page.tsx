import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getEpisodes, getEpisodeBySlug } from '@/lib/episodesService'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, Play, Calendar, Clock, Users } from 'lucide-react'

interface EpisodePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const episodes = await getEpisodes()
  return episodes.map((episode) => ({
    slug: episode.slug,
  }))
}

export default async function EpisodePage({ params }: EpisodePageProps) {
  const [episode, allEpisodes] = await Promise.all([
    getEpisodeBySlug(params.slug),
    getEpisodes()
  ])

  if (!episode) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getTopicColor = (topic: string) => {
    const colorMap: Record<string, string> = {
      'LinkedIn Timeline Talk': 'bg-primary-100 text-primary-800',
      'Marketing Strategy': 'bg-secondary-100 text-secondary-800',
      'AI and Business': 'bg-accent-mint-100 text-accent-mint-800',
      'Startup Culture': 'bg-accent-peach-100 text-accent-peach-800',
      'Brand Analysis': 'bg-primary-200 text-primary-900',
      'Consumer Psychology': 'bg-secondary-200 text-secondary-900',
      'Digital Trends': 'bg-accent-mint-200 text-accent-mint-900',
      'Social Media Insights': 'bg-accent-peach-200 text-accent-peach-900'
    }
    return colorMap[topic] || 'bg-gray-100 text-gray-800'
  }

  const relatedEpisodes = allEpisodes
    .filter(ep => 
      ep.id !== episode.id && 
      ep.topics.some(topic => episode.topics.includes(topic))
    )
    .slice(0, 3)

  return (
    <div className="min-h-screen podcast-gradient">
      <div className="container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <div className="max-w-4xl mx-auto mb-6">
          <Button variant="ghost" asChild className="text-primary-700 hover:text-primary-800">
            <Link href="/episodes" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Episodes
            </Link>
          </Button>
        </div>

        {/* Episode Header */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white/80 rounded-lg p-8 shadow-sm">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Episode Thumbnail */}
              {(episode.thumbnail || episode.image) && (
                <div className="lg:w-64 lg:flex-shrink-0">
                  <div className="relative aspect-[16/9] w-full h-auto">
                    <Image
                      src={episode.thumbnail || episode.image || ''}
                      alt={`${episode.title} thumbnail`}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 1024px) 100vw, 256px"
                      priority={true}
                    />
                  </div>
                </div>
              )}
              
              {/* Episode Info */}
              <div className="flex-1">
                <div className="flex items-center gap-2 text-sm text-text-muted mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(episode.publishDate)}</span>
                  <Clock className="w-4 h-4 ml-4" />
                  <span>{episode.duration}</span>
                  {episode.featured && (
                    <>
                      <Badge className="bg-secondary-100 text-secondary-800 border-secondary-200 ml-4">
                        Featured Episode
                      </Badge>
                    </>
                  )}
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
                  Episode {episode.episodeNumber}: {episode.title}
                </h1>

                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  {episode.description}
                </p>

                {/* Topics */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {episode.topics.map((topic, index) => (
                    <Badge 
                      key={index} 
                      className={`${getTopicColor(topic)} border-0`}
                    >
                      {topic}
                    </Badge>
                  ))}
                </div>

                {/* Guests */}
                {episode.guests && episode.guests.length > 0 && (
                  <div className="flex items-center gap-2 text-text-secondary mb-6">
                    <Users className="w-4 h-4" />
                    <span className="font-medium">Featured Guests:</span>
                    <span>{episode.guests.join(', ')}</span>
                  </div>
                )}

                {/* Listen Button */}
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary-500 hover:bg-secondary-600 text-white"
                >
                  <a 
                    href={episode.spotifyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Play className="w-5 h-5" />
                    Listen on Spotify
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Episode Content */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/80 rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-primary-800 mb-6">Show Notes</h2>
            
            {episode.showNotes ? (
              <div className="prose max-w-none">
                {/* Placeholder for actual show notes - would be MDX in production */}
                <div className="space-y-6 text-text-primary">
                  <p>
                    In this episode, we dive deep into the topics that matter most to today's 
                    marketing professionals and business leaders.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-primary-700">Key Discussion Points:</h3>
                  <ul className="space-y-2 list-disc list-inside">
                    {episode.topics.map((topic, index) => (
                      <li key={index}>Discussion on {topic.toLowerCase()}</li>
                    ))}
                  </ul>

                  <h3 className="text-lg font-semibold text-primary-700">Takeaways:</h3>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Practical insights for marketing professionals</li>
                    <li>Real-world examples and case studies</li>
                    <li>Actionable strategies you can implement today</li>
                  </ul>

                  <p>
                    Join us for more insights and discussions on marketing, branding, and business 
                    strategy in future episodes!
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-text-secondary">
                Detailed show notes for this episode are coming soon. Listen to the full episode 
                for all the insights and discussions!
              </p>
            )}
          </div>
        </div>

        {/* Related Episodes */}
        {relatedEpisodes.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-primary-800 mb-6">Related Episodes</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedEpisodes.map((relatedEp) => (
                <div key={relatedEp.id} className="bg-white/80 rounded-lg p-6 shadow-sm">
                  <div className="mb-3">
                    <h3 className="font-semibold text-primary-800 mb-2">
                      <Link 
                        href={`/episodes/${relatedEp.slug}`}
                        className="hover:underline"
                      >
                        Episode {relatedEp.episodeNumber}: {relatedEp.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-text-secondary line-clamp-3">
                      {relatedEp.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {relatedEp.topics.slice(0, 2).map((topic, index) => (
                      <Badge 
                        key={index} 
                        className={`${getTopicColor(topic)} border-0 text-xs`}
                      >
                        {topic}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xs text-text-muted">{relatedEp.duration}</span>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/episodes/${relatedEp.slug}`}>
                        Read More
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}