'use client'

import { useRouter } from 'next/navigation'
import React, { FC } from 'react'

interface AppProps{
    text:string
}


export const Button:FC<AppProps> = ({text}):JSX.Element => {

    const router = useRouter();


  return (
    <button onClick={()=>router.push('login')} className="btn btn-3 btn-3e icon-arrow-right text-lg font-mono mt-14 text-green-4 00">{text}</button>

  )
}
