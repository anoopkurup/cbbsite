'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Episode } from '@/types'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Play, Clock, Calendar, Headphones } from 'lucide-react'

interface EpisodeCardProps {
  episode: Episode
}

export function EpisodeCard({ episode }: EpisodeCardProps) {
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

  return (
    <Card className="episode-card-gradient border-0 shadow-sm hover:shadow-md transition-all duration-300 group">
      <div className="flex flex-col md:flex-row md:items-center">
        {/* Episode Thumbnail */}
        <div className="md:w-48 md:flex-shrink-0 md:flex md:items-center">
          <div className="relative aspect-[16/9] w-full h-auto">
            {episode.thumbnail || episode.image ? (
              <Image
                src={episode.thumbnail || episode.image || ''}
                alt={`${episode.title} thumbnail`}
                fill
                className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                sizes="(max-width: 768px) 100vw, 192px"
                priority={false}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary-400 to-secondary-400 rounded-t-lg md:rounded-l-lg md:rounded-t-none flex items-center justify-center">
                <Headphones className="w-12 h-12 text-white" />
              </div>
            )}
          </div>
        </div>
        
        {/* Episode Content */}
        <div className="flex-1">
          <CardHeader className="space-y-3">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 text-sm text-text-muted mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(episode.publishDate)}</span>
                  <Clock className="w-4 h-4 ml-2" />
                  <span>{episode.duration}</span>
                </div>
                <CardTitle className="text-lg leading-tight group-hover:text-primary-700 transition-colors">
                  <Link href={`/episodes/${episode.slug}`} className="hover:underline">
                    Episode {episode.episodeNumber}: {episode.title}
                  </Link>
                </CardTitle>
              </div>
              {episode.featured && (
                <Badge className="bg-secondary-100 text-secondary-800 border-secondary-200">
                  Featured
                </Badge>
              )}
            </div>
            <CardDescription className="text-text-secondary leading-relaxed">
              {episode.description}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {episode.topics.slice(0, 4).map((topic, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className={`${getTopicColor(topic)} border-0 text-xs`}
                >
                  {topic}
                </Badge>
              ))}
              {episode.topics.length > 4 && (
                <Badge variant="outline" className="text-xs">
                  +{episode.topics.length - 4} more
                </Badge>
              )}
            </div>

            {episode.guests && episode.guests.length > 0 && (
              <div className="text-sm text-text-muted">
                <span className="font-medium">Guests:</span> {episode.guests.join(', ')}
              </div>
            )}

            <div className="flex items-center justify-between pt-2">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="bg-primary-50 border-primary-200 text-primary-700 hover:bg-primary-100"
              >
                <Link href={`/episodes/${episode.slug}`}>
                  Read More
                </Link>
              </Button>
              
              <Button
                asChild
                size="sm"
                className="bg-secondary-500 hover:bg-secondary-600 text-white"
              >
                <a 
                  href={episode.spotifyUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  Listen Now
                </a>
              </Button>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  )
}