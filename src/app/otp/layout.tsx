import './globals.css'

export const metadata = {
  title: 'OTP',
  description: 'Get some slice of hackers',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
      <section>
        {children}
      </section>
  )
}
