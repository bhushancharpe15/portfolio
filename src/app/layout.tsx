import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FloatingElements } from '@/components/ui/FloatingElements'
import { ScrollHandler } from '@/components/ui/ScrollHandler'
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Bhushan Charpe - ML Engineer & Developer',
  description: 'Computer Engineering student at Vishwakarma University specializing in Machine Learning, Deep Learning, and Computer Vision. Building innovative AI solutions for real-world problems.',
  keywords: ['Portfolio', 'Machine Learning', 'Deep Learning', 'Computer Vision', 'AI', 'Bhushan Charpe', 'Vishwakarma University'],
  authors: [{ name: 'Bhushan Charpe' }],
  openGraph: {
    title: 'Bhushan Charpe - ML Engineer & Developer',
    description: 'B.Tech Computer Engineering student specializing in Machine Learning, Deep Learning, and Computer Vision.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Providers>
          <ScrollHandler />
          <FloatingElements />
          <Header />
          <main className="relative">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
