import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'General Refrigeration Service Co. — Oakland, CA',
  description: "Oakland's trusted refrigerator & freezer specialist. Same-day service, 503 five-star reviews. Call Gary Cain at (510) 652-1302.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
