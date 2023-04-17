'use client';

import React from 'react'
import './globals.css'
import Image from 'next/image';
import { Inter } from 'next/font/google'
import { Oswald } from 'next/font/google'
import {  ButtonComp } from '../extras/buttons/Button';
import LottieComp from '../extras/Lottie/Lottie';
import {motion} from 'framer-motion';

const lottiePath = require('../../../../public/lottie/abc.json');

const oswald = Oswald({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })


export const LandingC1 = () => {

  return (
    <div className='flex flex-1 flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row  mt-[100px]'>
        <div className={`flex items-center justify-center flex-col w-screen sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 `} >
            <motion.div initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{delay:1,duration:0.75,type:'tween'}} className={`text-[60px] sm:text-[80px] lg:text-[100px] xl:text-[160px] 2xl:text-[160px]  font-extrabold  ${oswald.className}`}>
              Gotcha!
            </motion.div>
              <motion.div initial={{opacity:0,y:25}} animate={{opacity:1,y:2}} transition={{delay:2,duration:0.75}} className='text-lg font-mono'>
                find the world of junior devs
              </motion.div>
              <motion.div initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{delay:4,duration:1,type:'tween'}}>
              <ButtonComp  text='Search   data' />
              </motion.div>
        </div>
       
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:3,duration:0.5}} className='w-screen sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 flex items-center justify-center  object-cover '>
            <LottieComp path={lottiePath} />

        </motion.div>

    </div>
  )
}
