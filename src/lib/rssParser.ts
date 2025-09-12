import Parser from 'rss-parser'
import { Episode } from '@/types'

interface CustomItem {
  'itunes:duration'?: string
  'itunes:episode'?: string
  'itunes:season'?: string
  'itunes:image'?: {
    $?: {
      href?: string
    }
  }
  enclosure?: {
    url?: string
  }
  image?: string
  thumbnail?: string
}

type CustomFeed = Parser.Output<CustomItem>
type CustomItem_ = Parser.Item & CustomItem

const parser: Parser<CustomFeed, CustomItem_> = new Parser({
  customFields: {
    item: [
      'itunes:duration',
      'itunes:episode', 
      'itunes:season',
      'itunes:image',
      'enclosure',
      'image',
      'thumbnail'
    ]
  }
})

export async function parseRSSFeed(rssUrl: string): Promise<Episode[]> {
  try {
    const feed = await parser.parseURL(rssUrl)
    
    if (!feed.items) {
      return []
    }

    const episodes: Episode[] = feed.items.map((item, index) => {
      // Extract episode number from various sources
      const episodeNumber = 
        parseInt(item['itunes:episode'] || '') || 
        (feed.items!.length - index) // Fallback: reverse index

      // Extract duration
      const duration = item['itunes:duration'] || 'Unknown'

      // Extract image/thumbnail
      let thumbnail: string | undefined
      if (item['itunes:image']?.$?.href) {
        thumbnail = item['itunes:image'].$.href
      } else if (item.enclosure?.url && item.enclosure.url.match(/\.(jpg|jpeg|png|webp)$/i)) {
        thumbnail = item.enclosure.url
      } else if (item.image) {
        thumbnail = item.image
      } else if (item.thumbnail) {
        thumbnail = item.thumbnail
      }

      // Create slug from title
      const slug = item.title?.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim() || `episode-${episodeNumber}`

      // Extract topics from description or use defaults
      const topics = extractTopicsFromDescription(item.contentSnippet || (item as any).description || '')

      return {
        id: slug,
        title: item.title || `Episode ${episodeNumber}`,
        description: item.contentSnippet || (item as any).description || '',
        publishDate: item.pubDate ? new Date(item.pubDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
        duration,
        episodeNumber,
        topics,
        spotifyUrl: item.link || '',
        featured: index < 3, // Mark first 3 episodes as featured
        slug,
        thumbnail,
        image: thumbnail
      }
    })

    // Sort by episode number descending (newest first)
    return episodes.sort((a, b) => b.episodeNumber - a.episodeNumber)
    
  } catch (error) {
    console.error('Error parsing RSS feed:', error)
    return []
  }
}

function extractTopicsFromDescription(description: string): string[] {
  const commonTopics = [
    'Marketing Strategy',
    'LinkedIn Timeline Talk',
    'AI and Business',
    'Consumer Psychology',
    'Digital Trends',
    'Brand Analysis',
    'Startup Culture',
    'Social Media',
    'Personal Branding',
    'Marketing Psychology'
  ]

  const foundTopics: string[] = []
  const lowerDescription = description.toLowerCase()

  commonTopics.forEach(topic => {
    if (lowerDescription.includes(topic.toLowerCase()) || 
        lowerDescription.includes(topic.split(' ')[0].toLowerCase())) {
      foundTopics.push(topic)
    }
  })

  // Default topics if none found
  if (foundTopics.length === 0) {
    foundTopics.push('Marketing', 'Business Insights')
  }

  return foundTopics.slice(0, 4) // Limit to 4 topics
}