export interface Episode {
  id: string
  title: string
  description: string
  publishDate: string
  duration: string
  seasonNumber?: number
  episodeNumber: number
  topics: string[]
  guests?: string[]
  spotifyUrl: string
  appleUrl?: string
  googleUrl?: string
  transcript?: string
  showNotes?: string
  featured: boolean
  slug: string
}

export interface Host {
  id: string
  name: string
  role: string
  bio: string
  image?: string
  linkedin?: string
  twitter?: string
  instagram?: string
  email?: string
}

export interface PodcastPlatform {
  name: string
  url: string
  icon: string
}

export interface Newsletter {
  email: string
}

export interface Topic {
  name: string
  slug: string
  color: string
}