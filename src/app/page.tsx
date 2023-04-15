import { Inter } from 'next/font/google'
import { Navbar } from './components/Navbar/Navbar'
import { LandingC1 } from './components/LandingPage/LandingC1'
import { BackHandler } from './components/DashBoardPage/BackHandler'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex flex-col">
          <Navbar />

        <section className=' bg-white'>
          <LandingC1 />
        </section>
        {/* <section className='h-screen bg-red'>
              wow
        </section> */}
    </div>
  )
}
