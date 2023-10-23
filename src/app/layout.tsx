import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Moga Charity Association',
  description: 'Moga Charity Association for Nicomas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='min-h-screen bg-white'>{children}</body>
    </html>
  )
}
