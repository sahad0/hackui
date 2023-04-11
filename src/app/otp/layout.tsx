import './globals.css'

export const metadata = {
  title: 'OTP',
  description: 'Get some slice of hackers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
