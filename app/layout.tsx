import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NutriLabel — FDA-Compliant Nutrition Labels for Restaurants',
  description: 'Scan your menu, match ingredients from the USDA database, and generate downloadable FDA-compliant nutrition labels in minutes.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="cf16c31a-9fd0-4ef2-bfe7-18c82795d090"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
