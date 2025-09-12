import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Click, Brand, and Beyond - Marketing & Business Insights Podcast',
  description: 'Join Anoop Kurup and Nisha as they explore LinkedIn timelines, marketing trends, AI impact on business, startup culture, and the evolving landscape of digital marketing and branding.',
  keywords: 'podcast, marketing, branding, AI, business, LinkedIn, startup culture, digital trends',
  authors: [{ name: 'Anoop Kurup' }, { name: 'Nisha' }],
  openGraph: {
    title: 'Click, Brand, and Beyond Podcast',
    description: 'Marketing & Business Insights Podcast with Anoop Kurup and Nisha',
    type: 'website',
    siteName: 'Click, Brand, and Beyond',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-background-light`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}