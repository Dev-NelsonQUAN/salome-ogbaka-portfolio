import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sholegal.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Salome Happiness Ogbaka | Legal Business Consultant & Corporate Advisory',
    template: '%s | SHO Legal',
  },
  description:
    'Expert legal advisory, corporate governance, CAC registration, and contract drafting for Nigerian entrepreneurs, startups, and SMEs. Author of "Legal Blueprint for Nigerian Entrepreneurs".',
  keywords: [
    'Salome Happiness Ogbaka',
    'SHO Legal Services',
    'Legal Business Consultant Nigeria',
    'Startup Lawyer Lagos',
    'CAC Registration',
    'Corporate Governance Nigeria',
    'Legal Blueprint for Nigerian Entrepreneurs',
    'Business Contract Drafting Nigeria',
    'Intellectual Property Protection',
  ],
  authors: [{ name: 'Salome Happiness Ogbaka', url: siteUrl }],
  creator: 'Salome Happiness Ogbaka',
  publisher: 'SHO Legal Services',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: siteUrl,
    title: 'Salome Happiness Ogbaka | Legal Business Consultant',
    description:
      'Building solid legal foundations for startups, SMEs, and entrepreneurs across Nigeria. Expert legal advice, contract drafting, and corporate compliance.',
    siteName: 'SHO Legal Services',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Salome Happiness Ogbaka - Legal Business Consultant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salome Happiness Ogbaka | Legal Business Consultant',
    description:
      'Expert legal guidance, CAC filings, contract templates, and compliance for Nigerian entrepreneurs.',
    images: ['/og-image.jpg'],
    creator: '@sholegal',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#d4af37',
  colorScheme: 'light dark',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'SHO Legal Services',
  image: `${siteUrl}/og-image.jpg`,
  '@id': siteUrl,
  url: siteUrl,
  telephone: '+2348000000000',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lagos',
    addressCountry: 'NG',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 6.5244,
    longitude: 3.3792,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '17:00',
  },
  founder: {
    '@type': 'Person',
    name: 'Salome Happiness Ogbaka',
    jobTitle: 'Legal Business Consultant',
  },
  description:
    'Legal advisory and consultation services for Nigerian startups, corporate governance, and small businesses.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="font-sans antialiased bg-background text-foreground"
        suppressHydrationWarning
      >
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}