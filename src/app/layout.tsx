import './globals.css'

export const metadata = {
  title: 'HackUi',
  description: 'Get some slice of hackers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <head></head>
        <body>{children}</body>
      </html>
  )
}
