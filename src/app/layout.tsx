import './globals.css'
import Header from "./Header"

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
      </body>
    </html>
  )
}
