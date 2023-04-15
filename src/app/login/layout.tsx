
export const metadata = {
  title: 'Login',
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
