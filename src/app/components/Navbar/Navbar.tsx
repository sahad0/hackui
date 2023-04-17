import React, { useEffect } from 'react'
import Image from 'next/image';



export const Navbar = () => {


 


  return (
    <div className='h-24 border-b-2 w-full absolute'>

        <Image draggable={false} src="/images/Navbar/logo.png"  height={72}  width={72} className='m-9 ' alt="Your Name" />

    </div>
  )
}



