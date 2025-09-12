'use client'

import { useState, useMemo } from 'react'
import { episodes } from '@/data/episodes'
import { topics } from '@/data/topics'
import { EpisodeCard } from '@/components/EpisodeCard'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Search, Filter } from 'lucide-react'

export default function EpisodesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTopic, setSelectedTopic] = useState<string>('')

  const filteredEpisodes = useMemo(() => {
    return episodes.filter(episode => {
      const matchesSearch = !searchTerm || 
        episode.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        episode.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        episode.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesTopic = !selectedTopic || 
        episode.topics.includes(selectedTopic)
      
      return matchesSearch && matchesTopic
    })
  }, [searchTerm, selectedTopic])

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedTopic('')
  }

  return (
    <div className="min-h-screen podcast-gradient">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            All Episodes
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Explore our complete collection of marketing and business insights
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-8 space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted w-4 h-4" />
            <Input
              placeholder="Search episodes by title, description, or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white/80 border-primary-200 focus:border-primary-400"
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <Filter className="w-4 h-4" />
              <span>Filter by topic:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={selectedTopic === '' ? "default" : "outline"}
                className={`cursor-pointer transition-colors ${
                  selectedTopic === '' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-white hover:bg-primary-50'
                }`}
                onClick={() => setSelectedTopic('')}
              >
                All Topics
              </Badge>
              
              {topics.map((topic) => (
                <Badge
                  key={topic.slug}
                  variant={selectedTopic === topic.name ? "default" : "outline"}
                  className={`cursor-pointer transition-colors ${
                    selectedTopic === topic.name
                      ? 'bg-primary-600 text-white'
                      : 'bg-white hover:bg-primary-50'
                  }`}
                  onClick={() => setSelectedTopic(
                    selectedTopic === topic.name ? '' : topic.name
                  )}
                >
                  {topic.name}
                </Badge>
              ))}
            </div>
          </div>

          {/* Active filters */}
          {(searchTerm || selectedTopic) && (
            <div className="flex items-center gap-2 p-3 bg-white/60 rounded-lg">
              <span className="text-sm text-text-secondary">Active filters:</span>
              {searchTerm && (
                <Badge variant="secondary" className="bg-secondary-100 text-secondary-800">
                  Search: {searchTerm}
                </Badge>
              )}
              {selectedTopic && (
                <Badge variant="secondary" className="bg-secondary-100 text-secondary-800">
                  Topic: {selectedTopic}
                </Badge>
              )}
              <button
                onClick={clearFilters}
                className="text-sm text-primary-600 hover:text-primary-800 ml-2 underline"
              >
                Clear all
              </button>
            </div>
          )}
        </div>

        {/* Results count */}
        <div className="max-w-4xl mx-auto mb-6">
          <p className="text-text-secondary">
            Showing {filteredEpisodes.length} of {episodes.length} episodes
          </p>
        </div>

        {/* Episodes Grid */}
        <div className="max-w-4xl mx-auto space-y-6">
          {filteredEpisodes.length > 0 ? (
            filteredEpisodes.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-text-secondary text-lg mb-4">
                No episodes found matching your criteria
              </p>
              <button
                onClick={clearFilters}
                className="text-primary-600 hover:text-primary-800 underline"
              >
                Clear filters to see all episodes
              </button>
            </div>
          )}
        </div>

        {/* Load More (placeholder for future pagination) */}
        {filteredEpisodes.length > 0 && filteredEpisodes.length === episodes.length && (
          <div className="text-center mt-12">
            <p className="text-text-muted">
              You've seen all {episodes.length} episodes! 
              <span className="ml-2">🎉</span>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}