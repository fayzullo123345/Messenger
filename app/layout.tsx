import { Inter } from 'next/font/google'
import React from "react";
import ToasterContext from "@/app/context/ToasterContext";
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Messenger',
  description: 'Messenger',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        suppressHydrationWarning={true}
      >
      <ToasterContext/>
      {children}
      </body>
    </html>
  )
}
