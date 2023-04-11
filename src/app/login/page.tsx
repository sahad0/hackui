'use client'

import { Inter, Oswald } from 'next/font/google'
import { useEffect, useState } from 'react'
import { Loader } from '../components/Loader/Loader';
import Typewriter from '../components/framerComponents/TypeWriter/TypeWriter';
import {motion} from 'framer-motion';
import { variantsLogin } from './varientsConf';

const oswald = Oswald({ subsets: ['latin'] })


export default function Login():JSX.Element {

  const [loading,setLoading] = useState<boolean>(true);


  useEffect(()=>{

    const x = setTimeout(()=>{
      setLoading(false)
    },4000)

    return ()=> clearInterval(x);

  },[]);


  return (
    <main className="flex min-h-screen bg-white items-center justify-center">

        {
          loading ?
          <>
            <div >
              <Loader />
            </div>
            <div className='mt-44'>
                Fetching your meta
            </div> 
          </>

            :
            
          <div className={`${oswald.className} text-lg overflow-hidden`}>
            <div className='absolute top-[45%] left-[15%] sm:left-[15%] md:left-[35%] lg:left-[40%]  xl:left-[40%] 2xl:left-[40%] '>
            <Typewriter text="Our kidd' o is trying to securely log on u !" />
            </div>

            <motion.div className='h-screen bg-black w-screen'variants={variantsLogin} initial="initial" animate="animate" transition={{ duration: 1.2,delay:6 }}>



            </motion.div>

          </div>
        }



    </main>
  )
}
