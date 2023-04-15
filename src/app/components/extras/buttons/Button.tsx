'use client'

import { useRouter } from 'next/navigation'
import React, { FC } from 'react'

interface AppProps{
    text:string
}


export const ButtonComp:FC<AppProps> = ({text}):JSX.Element => {

    const router = useRouter();


  return (
    <button onClick={()=>router.push('login')} className="btn btn-3 btn-3e icon-arrow-right text-[15px] font-mono mt-14 text-green-4 h-auto w-auto sm:h-20 sm:w-auto">{text}</button>

  )
}
