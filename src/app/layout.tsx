import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next JS 13 Trainnig',
  description: 'Meu primeiro Next JS 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1 className="bg-yellow-700 text-gray-400">Root Layout</h1>
        {children}
      </body>
    </html>
  )
}
