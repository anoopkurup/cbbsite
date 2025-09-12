# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a podcast website for "Click, Brand, and Beyond" - a marketing and business insights podcast hosted by Anoop Kurup and Nisha. The site is built with Next.js 14/15 using the App Router pattern, styled with Tailwind CSS and shadcn/ui components.

## Development Commands

*Note: This project is currently in the planning/documentation phase. Once initialized with Next.js:*

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Linting (when configured)
npm run lint

# Type checking (when configured)
npm run typecheck
```

## Architecture Overview

### Core Structure
- **App Router Architecture**: Using Next.js 14/15 app directory structure
- **Content Strategy**: Episodes are the primary content type, managed through TypeScript interfaces and MDX for show notes
- **Component Architecture**: shadcn/ui base components with custom podcast-specific components

### Key Data Models

**Episode Interface** (central to the application):
```typescript
interface Episode {
  id: string;
  title: string;
  description: string;
  publishDate: string;
  duration: string;
  episodeNumber: number;
  topics: string[];
  spotifyUrl: string;
  featured: boolean;
  // Optional: seasonNumber, guests, transcript, showNotes
}
```

### Planned Directory Structure
```
app/
├── episodes/           # Primary feature - episode listing and individual pages
│   ├── page.tsx       # Main episodes listing (most important page)
│   └── [slug]/        # Individual episode pages
├── hosts/             # Host profiles (Anoop & Nisha)
├── about/             # Podcast information
└── subscribe/         # Platform links and newsletter

components/
├── ui/                # shadcn/ui components
├── EpisodeCard.tsx    # Core component for episode display
├── LatestEpisode.tsx  # Homepage hero episode
└── HostProfiles.tsx   # Host information display

data/
├── episodes.ts        # Episode data (13+ episodes from April 2024)
└── hosts.ts          # Host profile data
```

### Content Management
- **Show Notes**: MDX files with frontmatter for episode metadata
- **Topics/Categories**: Marketing Strategy, AI and Business, LinkedIn Timeline Talk, Consumer Psychology, Digital Trends
- **Audio Integration**: Primary platform is Spotify, with links to other podcast platforms

### Design System
- **Color Scheme**: Deep blue/navy (professional) + bright orange/coral (energy)
- **Typography**: Modern sans-serif, with emphasis on readability
- **Mobile-First**: Responsive design optimized for podcast consumption

### Development Phases
1. **Foundation**: Episodes system (primary feature)
2. **Core Website**: Homepage, hosts, about, subscribe pages  
3. **Enhanced Features**: Search/filter, newsletter, social sharing
4. **Content & Launch**: Import all existing episodes, SEO optimization

## Key Implementation Notes

### Episodes System Priority
The episodes listing page (`app/episodes/page.tsx`) is the most critical feature and should be implemented first. This includes:
- Complete episode listing (latest first)
- Episode filtering by topics
- Search functionality
- Episode card components with play buttons

### Podcast-Specific Considerations
- **Spotify Integration**: Primary audio hosting platform
- **Episode Metadata**: Rich episode data including topics, duration, guest information
- **Show Notes**: MDX content with timestamps and resource links
- **Social Sharing**: Optimized for LinkedIn (primary platform for hosts)

### Content Import Strategy
- 13+ existing episodes from April 2024 to September 2024
- LinkedIn Timeline Talk series episodes
- Guest episodes featuring Tridib Ghosh
- Episode topics span marketing, AI, branding, and startup culture

This project focuses on creating a professional podcast discovery and listening experience, with the episodes system as the foundation for all other features.