import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Bringforth Studio',
  description: 'AI Product Lab — Bringforth Studio'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
