import './globals.css'
import Header from "./Header"
import {Analytics} from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head />
      <body className={"flex flex-col h-screen"}>
          <Analytics />
          <Header/>
          {children}
      </body>
    </html>
  )
}
