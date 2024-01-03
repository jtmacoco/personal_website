import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: "400",
  variable: '--font-roboto'
})

export const metadata: Metadata = {
  title: 'jtmacoco',
  description: 'personal site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Analytics />
      </head>
      <body className={`${roboto.className}`}>
        {children}
      </body>
    </html>
  )
}
