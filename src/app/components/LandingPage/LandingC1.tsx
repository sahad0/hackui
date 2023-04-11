import React from 'react'
import './globals.css'
import Image from 'next/image';
import { Inter } from 'next/font/google'
import { Oswald } from 'next/font/google'


const oswald = Oswald({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })


export const LandingC1 = () => {

  return (
    <div className='flex flex-1 flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row  mt-[100px]'>
        <div className={`flex items-center justify-center flex-col w-screen sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 text-[140px]   ${oswald.className} font-extrabold md:w-full outlined-text`} >
              Gotcha!
              <div className='text-lg font-mono'>
                find the world of junior devs
              </div>
              <button className="btn btn-3 btn-3e icon-arrow-right text-lg font-mono mt-14 text-green-4 00">Send data</button>

        </div>
       
        <div className='w-screen sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 flex items-center justify-center object-cover '>
            <Image src="/images/LandingPage/boy_h.png"  height={300}  width={300} className='m-9' alt="Your Name" priority />

        </div>

    </div>
  )
}
