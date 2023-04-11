import { Inter } from 'next/font/google'
import { Navbar } from './components/Navbar/Navbar'
import { LandingC1 } from './components/LandingPage/LandingC1'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen bg-white">
        <Navbar />
        <LandingC1 />
    </main>
  )
}
