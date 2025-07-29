import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stanford Black Creative Collective',
  description: 'Celebrating and amplifying Black creativity, culture, and artistic excellence at Stanford University',
  keywords: ['Stanford', 'Black Creative Collective', 'Art', 'Culture', 'Community', 'Artists'],
  authors: [{ name: 'Stanford Black Creative Collective' }],
  openGraph: {
    title: 'Stanford Black Creative Collective',
    description: 'Celebrating and amplifying Black creativity, culture, and artistic excellence at Stanford University',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stanford Black Creative Collective',
    description: 'Celebrating and amplifying Black creativity, culture, and artistic excellence at Stanford University',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}