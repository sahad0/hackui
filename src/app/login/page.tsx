'use client'

import { Inter, Oswald } from 'next/font/google'
import { useEffect, useState } from 'react'
import { Loader } from '../components/extras/Loader/Loader';
import Typewriter from '../components/extras/framerComponents/TypeWriter/TypeWriter';
import {motion} from 'framer-motion';
import { variantsLogin } from './varientsConf';
import { useRouter } from 'next/navigation';
import { AnimatedLoginComp } from '../components/LoginPage/AnimatedLoginComp';

const oswald = Oswald({ subsets: ['latin'] })


export default function Login():JSX.Element {

  const [loading,setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(()=>{

    const x = setTimeout(()=>{
      if(localStorage.getItem('auth')){
          router.push('dashboard');
      }
      setLoading(false)
    },4000)

    return ()=> clearInterval(x);

  },[]);


  return (
    <div className="flex h-screen bg-white items-center justify-center">

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

            <motion.div className='h-screen bg-white w-screen text-sm'variants={variantsLogin} initial="initial" animate="animate" transition={{type:'spring', duration: 1.2,delay:6 }}>
              <AnimatedLoginComp />
            </motion.div>

          </div>
        }



    </div>
  )
}
