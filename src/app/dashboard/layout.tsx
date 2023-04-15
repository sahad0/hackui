// import './globals.css'

export const metadata = {
  title: 'DashBoard',
  description: 'Get some slice of hackers',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
 
      <section>{children}</section>
    )
}
