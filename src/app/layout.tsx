import './globals.css'
import Header from "./Header"
import { AnalyticsWrapper } from "@/app/components/analytics";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head />
      <body className={"flex flex-col h-screen"}>
          <Header/>
          {children}
          <AnalyticsWrapper />
      </body>
    </html>
  )
}
