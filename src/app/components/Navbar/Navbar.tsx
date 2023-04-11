'use client'

import React from 'react'
import Image from 'next/image';



export const Navbar = () => {
  return (
    <div className='h-24 border-b-2 w-full absolute'>

        <Image draggable={false} src="/images/Navbar/logo.png"  height={75}  width={75} className='m-9' alt="Your Name" />

    </div>
  )
}



