import type { Metadata, Viewport } from 'next'
import { Crimson_Text, Source_Sans_3 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const crimsonText = Crimson_Text({ 
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif"
});

const sourceSans = Source_Sans_3({ 
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: 'French Texts from Crusader Cyprus',
  description: 'An academic resource for French legal texts from medieval Crusader Cyprus, featuring manuscript viewers, transcriptions, and translations.',
  keywords: ['medieval', 'crusader', 'cyprus', 'french', 'legal texts', 'manuscripts', 'IIIF'],
}

export const viewport: Viewport = {
  themeColor: '#001524',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${crimsonText.variable} ${sourceSans.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
