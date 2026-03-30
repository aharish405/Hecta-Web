import type { Metadata, Viewport } from 'next'
import { Inter, Roboto_Condensed } from 'next/font/google'
import './globals.css'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

const robotoCondensed = Roboto_Condensed({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-roboto-condensed',
    display: 'swap',
})

export const viewport: Viewport = {
    themeColor: '#1e3a5f',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
}

export const metadata: Metadata = {
    title: 'Hecta Enterprises - Precision Sheet Metal Stamping & Fabrication for Automotive',
    description: 'Leading manufacturer of high-quality sheet metal stamping and fabrication services for two-wheeler and four-wheeler automotive OEMs. Progressive die stamping, laser cutting, CNC machining, and quality assurance since 1993.',
    keywords: 'sheet metal stamping, automotive fabrication, progressive die stamping, laser cutting, CNC bending, automotive OEM supplier, two-wheeler parts, four-wheeler components, Hyderabad manufacturing, precision metal parts',
    authors: [{ name: 'Hecta Enterprises' }],
    openGraph: {
        title: 'Hecta Enterprises - Precision Automotive Sheet Metal Manufacturing',
        description: 'High-volume quality components engineered for two- and four-wheeler manufacturers',
        type: 'website',
        locale: 'en_IN',
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${inter.variable} ${robotoCondensed.variable}`}>
            <head>
                <link rel="manifest" href="/manifest.json" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/icon-192x192.png" />
            </head>
            <body>{children}</body>
        </html>
    )
}
