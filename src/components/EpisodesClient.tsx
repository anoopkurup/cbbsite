'use client'

import { useState, useMemo } from 'react'
import { Episode } from '@/types'
import { topics } from '@/data/topics'
import { EpisodeCard } from '@/components/EpisodeCard'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Search, Filter } from 'lucide-react'

interface EpisodesClientProps {
  episodes: Episode[]
}

export default function EpisodesClient({ episodes }: EpisodesClientProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTopic, setSelectedTopic] = useState<string>('')

  const filteredEpisodes = useMemo(() => {
    return episodes.filter(episode => {
      const matchesSearch = !searchTerm || 
        episode.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        episode.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        episode.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesTopic = !selectedTopic || 
        episode.topics.some(topic => topic === selectedTopic)

      return matchesSearch && matchesTopic
    })
  }, [episodes, searchTerm, selectedTopic])

  const allTopics = useMemo(() => {
    const topicsSet = new Set<string>()
    episodes.forEach(episode => {
      episode.topics.forEach(topic => topicsSet.add(topic))
    })
    return Array.from(topicsSet).sort()
  }, [episodes])

  return (
    <div className="min-h-screen bg-background-light">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            All Episodes
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Explore our complete collection of marketing insights, business strategies, 
            and industry discussions
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/80 rounded-lg p-6 shadow-sm">
            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-3 w-4 h-4 text-text-muted" />
              <Input
                type="text"
                placeholder="Search episodes by title, description, or topic..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Topic Filter */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-text-muted" />
                <span className="text-sm font-medium text-text-secondary">Filter by Topic:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant={!selectedTopic ? "default" : "outline"}
                  className={`cursor-pointer ${!selectedTopic ? 'bg-primary-600' : 'hover:bg-primary-50'}`}
                  onClick={() => setSelectedTopic('')}
                >
                  All Topics
                </Badge>
                {allTopics.map((topic) => (
                  <Badge
                    key={topic}
                    variant={selectedTopic === topic ? "default" : "outline"}
                    className={`cursor-pointer ${selectedTopic === topic ? 'bg-primary-600' : 'hover:bg-primary-50'}`}
                    onClick={() => setSelectedTopic(topic)}
                  >
                    {topic}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="max-w-6xl mx-auto">
          {filteredEpisodes.length > 0 ? (
            <>
              <div className="text-center mb-8">
                <p className="text-text-muted">
                  Showing {filteredEpisodes.length} of {episodes.length} episodes
                </p>
              </div>
              <div className="space-y-6">
                {filteredEpisodes.map((episode) => (
                  <EpisodeCard key={episode.id} episode={episode} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-primary-800 mb-2">
                No episodes found
              </h3>
              <p className="text-text-muted mb-6">
                Try adjusting your search terms or selected topic filter
              </p>
              <Badge
                variant="outline"
                className="cursor-pointer hover:bg-primary-50"
                onClick={() => {
                  setSearchTerm('')
                  setSelectedTopic('')
                }}
              >
                Clear all filters
              </Badge>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}