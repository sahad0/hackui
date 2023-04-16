import { Inter } from 'next/font/google'
import { Navbar } from './components/Navbar/Navbar'
import { LandingC1 } from './components/LandingPage/LandingC1'
import { redirect } from 'next/dist/server/api-utils';
import { NextApiResponse } from 'next';


const inter = Inter({ subsets: ['latin'] });



const  Landing = ()=> {

  

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


export default Landing;