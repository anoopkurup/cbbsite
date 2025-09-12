# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a podcast website for "Click, Brand, and Beyond" - a marketing and business insights podcast hosted by Anoop Kurup and Nisha Prakash. The site is built with Next.js 14 using the App Router pattern, styled with Tailwind CSS and shadcn/ui components.

## Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Linting
npm run lint
```

## Architecture Overview

### Core Structure
- **App Router Architecture**: Using Next.js 14/15 app directory structure
- **Content Strategy**: Episodes are the primary content type, managed through TypeScript interfaces and MDX for show notes
- **Component Architecture**: shadcn/ui base components with custom podcast-specific components

### Key Data Models

**Episode Interface** (central to the application - see `src/types/index.ts`):
```typescript
interface Episode {
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
  thumbnail?: string
  image?: string
}
```

**Additional Data Models**:
- `Host`: Host profile information with social links
- `PodcastPlatform`: Platform links and icons
- `Newsletter`: Newsletter subscription handling
- `Topic`: Topic categorization with colors and slugs

### Current Directory Structure
```
app/
├── episodes/           # Primary feature - episode listing and individual pages
│   ├── page.tsx       # Main episodes listing (implemented)
│   └── [slug]/page.tsx # Individual episode pages (implemented)
├── hosts/page.tsx      # Host profiles (implemented)
├── about/page.tsx      # Podcast information (implemented)
├── subscribe/page.tsx  # Platform links and newsletter (implemented)
├── test-images/page.tsx # Image testing page
└── layout.tsx         # Root layout with navigation

components/
├── ui/                # shadcn/ui components (card, badge, button, etc.)
├── EpisodeCard.tsx    # Core component for episode display
├── EpisodesClient.tsx # Client-side episodes filtering/search
├── Footer.tsx         # Site footer
└── ImageTest.tsx      # Image testing component

data/
├── episodes.ts        # Episode data (44 episodes as of 2025)
└── (hosts data in components)

lib/
├── episodesService.ts     # Main episode service with caching
├── episodesServiceSpotify.ts # Spotify integration service
├── rssParser.ts           # RSS feed parsing
├── spotify/              # Spotify API integration
│   ├── client.ts        # Spotify API client
│   ├── service.ts       # Spotify service functions
│   └── test.ts          # Spotify testing utilities
└── utils.ts             # Utility functions
```

### Content Management
- **Episode Data**: Static TypeScript data with 44+ episodes (2024-2025)
- **Spotify Integration**: Primary platform integration with API services and caching
- **RSS Parsing**: Alternative content source via RSS feed parsing
- **Topics/Categories**: AI, Marketing Strategy, LinkedIn, Consumer Psychology, Digital Trends
- **Content Fallback**: Graceful fallback from Spotify API to static data

### Technology Stack
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS + shadcn/ui components
- **Data**: Static TypeScript + Spotify API integration
- **Image Optimization**: Next.js Image with Spotify CDN domains
- **Environment**: dotenv configuration for API credentials

### Current Implementation Status
✅ **Completed Features**:
- Core Next.js application structure
- Episode listing and individual episode pages
- Spotify API integration with caching
- RSS feed parsing capability
- Host profiles, About, and Subscribe pages
- Responsive design with shadcn/ui components
- Episode filtering and search functionality

🔄 **In Progress**:
- Content optimization and testing
- Image handling improvements
- API integration refinements

## Key Implementation Notes

### Data Architecture
**Primary Data Flow**:
1. **Static Episodes** (`src/data/episodes.ts`): 44+ episodes with complete metadata
2. **Spotify Integration** (`src/lib/spotify/`): API-based episode fetching with authentication
3. **Caching Layer** (`src/lib/episodesService.ts`): 30-minute cache to optimize API calls
4. **Fallback Strategy**: Graceful degradation from Spotify API to static data

### Episodes System (Core Feature)
The episodes system is fully implemented with:
- **Episode Listing**: Complete listing with search and filtering (`/episodes`)
- **Individual Episodes**: Dynamic routing with episode details (`/episodes/[slug]`)
- **Client-Side Features**: Real-time search and topic filtering
- **Episode Cards**: Reusable components with Spotify integration

### Spotify Integration Details
- **Authentication**: Client credentials flow for public episodes
- **API Services**: Comprehensive episode fetching with error handling
- **Image Optimization**: Spotify CDN domains configured in `next.config.js`
- **Environment Variables**: `.env` file for API credentials (see `.env.example`)

### Content Strategy
- **44+ Episodes**: From November 2024 through September 2025
- **Rich Metadata**: Topics, guests, duration, platform links
- **Guest Episodes**: Featuring Tridib Ghosh and other industry experts
- **Series Content**: LinkedIn Timeline Talk episodes, seasonal content
- **Topic Coverage**: AI, Marketing Strategy, Consumer Psychology, Brand Analysis

This project is a fully functional podcast website with robust data management and modern web development practices.