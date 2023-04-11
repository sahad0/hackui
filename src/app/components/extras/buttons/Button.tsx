'use client'

import { useRouter } from 'next/navigation'
import React, { FC } from 'react'
import  './Button.module.css';

interface AppProps{
    text:string
}


export const ButtonComp:FC<AppProps> = ({text}):JSX.Element => {

    const router = useRouter();


  return (
    <button onClick={()=>router.push('login')} className="btn btn-3 btn-3e icon-arrow-right text-lg font-mono mt-14 text-green-4 h-10 w-10 sm:h-20 sm:w-20">{text}</button>

  )
}
