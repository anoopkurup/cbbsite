# 🎙️ Click, Brand, and Beyond

A modern, responsive podcast website for "Click, Brand, and Beyond" - a marketing and business insights podcast hosted by Anoop Kurup and Nisha.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?logo=tailwind-css)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?logo=shadcnui)

## ✨ Features

- 🎨 **Beautiful Pastel Design** - Soft blues, corals, mint, and peach colors for a modern aesthetic
- 📱 **Mobile-First Responsive** - Optimized for all device sizes
- 🔍 **Advanced Search & Filter** - Find episodes by title, description, or topics
- 🎵 **Spotify Integration** - Direct links to listen on various podcast platforms
- 📧 **Newsletter Signup** - Stay updated with latest episodes and insights
- ⚡ **Fast Performance** - Built with Next.js 14 and static generation
- 🎯 **SEO Optimized** - Proper meta tags and structured data

## 🚀 Live Demo

- **Development**: [http://localhost:3000](http://localhost:3000)
- **Repository**: [https://github.com/anoopkurup/cbbsite.git](https://github.com/anoopkurup/cbbsite.git)

## 📁 Project Structure

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
│   │   ├── episodes.ts         # 13+ sample episodes
│   │   ├── hosts.ts            # Host information
│   │   ├── topics.ts           # Episode topics/categories
│   │   └── platforms.ts        # Podcast platforms
│   ├── types/                  # TypeScript interfaces
│   └── lib/                    # Utility functions
├── public/                     # Static assets
└── docs/                       # Documentation
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom pastel theme
- **Components**: shadcn/ui for consistent design system
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel/Netlify

## 🎨 Design System

### Color Palette
- **Primary**: Soft blues and lavenders (#f0f4ff to #0a2266)
- **Secondary**: Warm corals and peaches (#fff5f2 to #661a0a)
- **Accent**: 
  - Mint greens (#f0fdf9 to #0a5a36)
  - Soft peaches (#fef7ed to #6b2807)
- **Backgrounds**: Off-whites and subtle grays

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, modern sans-serif
- **Body**: Clean, readable sans-serif optimized for podcast content

## 📚 Content

### Episodes (13+ Sample Episodes)
- **Latest**: "The Hidden Costs of Our Digital Lives: FOMO, Social Media Breaks, and AI Comments"
- **Topics**: LinkedIn Timeline Talk, Marketing Strategy, AI & Business, Startup Culture
- **Format**: 20-65 minute episodes with detailed show notes
- **Guests**: Features industry experts like Tridib Ghosh

### Hosts
- **Anoop Kurup**: Marketing Strategist with expertise in digital trends and business development
- **Nisha**: Brand Analyst specializing in consumer psychology and market research

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/anoopkurup/cbbsite.git
   cd cbbsite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

## 📄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎙️ Key Pages

1. **Homepage** (`/`)
   - Hero section with podcast branding
   - Latest episode showcase
   - Featured episodes grid
   - Host introductions
   - Topics overview

2. **Episodes** (`/episodes`)
   - Complete episode listing (primary feature)
   - Search and filter by topics
   - Episode cards with play buttons
   - Pagination support

3. **Individual Episodes** (`/episodes/[slug]`)
   - Full episode details
   - Show notes and timestamps
   - Related episodes
   - Direct Spotify links

4. **Hosts** (`/hosts`)
   - Detailed host profiles
   - Areas of expertise
   - Social media links
   - Recent episodes

5. **About** (`/about`)
   - Podcast mission and format
   - Statistics and achievements
   - What makes it different
   - Community information

6. **Subscribe** (`/subscribe`)
   - All podcast platform links
   - Newsletter signup form
   - Social media follows
   - RSS feed access

## 🎯 Core Features

### Episode Management
- **Rich Metadata**: Title, description, duration, topics, guests
- **Search Functionality**: Real-time search across episodes
- **Topic Filtering**: Filter by marketing categories
- **Featured Episodes**: Highlighted important content

### User Experience
- **Responsive Design**: Works on all devices
- **Fast Loading**: Optimized with Next.js static generation
- **Accessible**: Semantic HTML and proper ARIA labels
- **SEO Optimized**: Meta tags and structured data

### Content Types
- **LinkedIn Timeline Talk**: Real-time social media analysis
- **Deep Dives**: Marketing strategy and business insights
- **Guest Episodes**: Industry expert interviews
- **Trend Analysis**: AI and digital marketing discussions

## 🌟 Highlights

- ✅ **13+ Episodes** with rich content and metadata
- ✅ **Search & Filter** functionality for easy episode discovery
- ✅ **Beautiful Pastel Design** with modern aesthetics
- ✅ **Mobile Optimized** for podcast consumption on-the-go
- ✅ **Spotify Integration** with direct episode links
- ✅ **Newsletter Signup** for community building
- ✅ **Social Media Integration** across platforms
- ✅ **Professional Navigation** with active states
- ✅ **TypeScript** for type safety and better development experience

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Contact

- **Podcast Email**: hello@clickbrandandbeyond.com
- **Anoop Kurup**: [LinkedIn](https://linkedin.com/in/anoopkurup)
- **Nisha**: [LinkedIn](https://linkedin.com/in/nisha-marketing)

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

**🎙️ Click, Brand, and Beyond** - Where marketing meets innovation. Join us for insights that matter.

*Built with ❤️ for the marketing community*