'use client'

import React, { useEffect, useRef, useState } from 'react'
import Typewriter from '../extras/framerComponents/TypeWriter/TypeWriter';
import {motion} from  'framer-motion'
import { useRouter } from 'next/navigation';

export const AnimatedLoginComp = () => {

  const [loader,showLoader] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [route,setRoute] = useState<boolean>(false);
  const router = useRouter();



  useEffect(()=>{
    const text = process.env.NEXT_PUBLIC_EMAIL ? process.env.NEXT_PUBLIC_EMAIL : '';
    const x = setTimeout(()=>{
      if(loader){

        let currentIndex = 0;
        const intervalId = setInterval(() => {
          (inputRef.current as HTMLInputElement).value = text.slice(0, currentIndex);
          currentIndex++;
          if (currentIndex > text.length) clearInterval(intervalId);
          if(currentIndex===text.length-1) setRoute(true);
        }, 100);

        
    }},2000);


   return ()=> clearInterval(x);
  },[loader]);


  useEffect(()=>{
    if(route){
      let k = setInterval(()=>{
        router.push('otp');
      },2000);
      return ()=>clearInterval(k);

    }
  })



  return (
      <div className="flex h-screen items-center justify-center w-screen">
      <div className="relative w-96  m-5">
        <input
          ref={inputRef}
          disabled={loader}
          onFocus={()=>showLoader(true)}
          type="email"
          className="w-full px-4 py-2 text-white focus:bg-gray-400 bg-gray-700 text-lg rounded-full shadow-md focus:outline-none focus:shadow-outline-gray"
          placeholder="Email Address"
        />
        
       {
          loader && (
            <>
            <div className='mt-6'>
            <Typewriter text='Oops!, ' />
            </div>
            <motion.div initial={{opacity:0,y:-30}} animate={{opacity:1,y:0}} transition={{delay:2}} className='font-mono flex flex-row mt-10 items-center'>

            <div className="flex justify-center items-center mr-5">
              <svg className="h-12 w-12 animate-spin" viewBox="3 3 18 18">
                <path
                  className="fill-gray-200"
                  d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"></path>
                <path
                  className="fill-gray-800"
                  d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
              </svg>
            </div>
  
            It seems, A dev accessed your AuthCard, Auto Authenicating....
          </motion.div>
          </>
          )

       }

      </div>
    </div>
  )
}
