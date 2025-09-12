# Click, Brand, and Beyond Podcast Website

## Project Overview

This is a modern, responsive podcast website for "Click, Brand, and Beyond" - a marketing and business insights podcast hosted by Anoop Kurup and Nisha Prakash. The site is built with Next.js 14 using the App Router, TypeScript, Tailwind CSS, and shadcn/ui components.

### Key Features
- Beautiful pastel design with soft blues, corals, mint, and peach colors
- Mobile-first responsive design
- Advanced search and filter for episodes
- Spotify integration for listening
- Newsletter signup functionality
- Fast performance with Next.js static generation
- SEO optimized with proper meta tags

### Tech Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom pastel theme
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel/Netlify

## Project Structure

```
cbbsite/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── episodes/           # Episodes listing and individual pages
│   │   ├── hosts/              # Host profiles
│   │   ├── about/              # About the podcast
│   │   └── subscribe/          # Subscription and social links
│   ├── components/             # Reusable UI components
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── EpisodeCard.tsx     # Episode display component
│   │   ├── Header.tsx          # Navigation header
│   │   └── Footer.tsx          # Site footer
│   ├── data/                   # Static data files
│   │   ├── episodes.ts         # 40+ sample episodes
│   │   ├── hosts.ts            # Host information
│   │   ├── topics.ts           # Episode topics/categories
│   │   └── platforms.ts        # Podcast platforms
│   ├── types/                  # TypeScript interfaces
│   └── lib/                    # Utility functions
├── public/                     # Static assets
└── docs/                       # Documentation
```

## Development Setup

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server
4. Open `http://localhost:3000` in your browser

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Core Functionality

### Episode Management
The site features a comprehensive episode management system with:
- Rich metadata (title, description, duration, topics, guests)
- Search functionality across episodes
- Topic filtering
- Featured episodes highlighting

### Data Architecture
Episodes are managed through a dual approach:
1. **Primary Source**: RSS feed integration with fallback to static data
2. **Static Data**: TypeScript files in `src/data/` for development and fallback

The `episodesService.ts` handles data fetching with caching and the `rssParser.ts` processes RSS feeds with fallback to static data.

### Design System
- **Color Palette**: Custom pastel theme with:
  - Primary: Soft blues and lavenders
  - Secondary: Warm corals and peaches
  - Accents: Mint greens and soft peaches
- **Typography**: Inter font from Google Fonts
- **Responsive**: Mobile-first design approach

## Key Pages

1. **Homepage** (`/`) - Hero section, latest episode, featured episodes, host introductions
2. **Episodes** (`/episodes`) - Complete episode listing with search and filter
3. **Individual Episodes** (`/episodes/[slug]`) - Full episode details and Spotify links
4. **Hosts** (`/hosts`) - Detailed host profiles and social links
5. **About** (`/about`) - Podcast mission and format information
6. **Subscribe** (`/subscribe`) - Platform links and newsletter signup

## Content Structure

### Episodes
- 40+ sample episodes covering marketing and business topics
- Topics include LinkedIn Timeline Talk, Marketing Strategy, AI & Business, Startup Culture
- Episode format: 20-35 minutes with detailed show notes
- Guest episodes featuring industry experts

### Hosts
- **Anoop Kurup**: Marketing Strategist with expertise in digital trends
- **Nisha Prakash**: Brand Analyst specializing in consumer psychology

## UI Components

The site uses shadcn/ui components for consistent design and includes custom components:
- `EpisodeCard` - Displays episode information with thumbnail, topics, and actions
- `Header` - Navigation with mobile-responsive menu
- `Footer` - Site footer with links and information

## Development Conventions

### Styling
- Tailwind CSS with custom color palette defined in `tailwind.config.ts`
- Custom gradients for hero sections and cards
- Responsive design using Tailwind's breakpoints

### TypeScript
- Strict type checking enabled
- Custom interfaces defined in `src/types/index.ts`
- Path aliases configured for cleaner imports (`@/*`)

### Data Management
- Static data files in `src/data/` for development
- RSS feed integration with fallback mechanism
- Caching strategy in episode service for performance

## Deployment
The site is configured for deployment on Vercel or Netlify with standard Next.js build processes.

## Contributing
1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open Pull Request