'use client';

import React, { FC, useEffect } from 'react'
import { OtpHolder } from './OtpHolder';
import { useRouter } from 'next/navigation';


interface AppProps {
    data:{
        generateOTP:string,
    }
}

export const OtpParent:FC<AppProps> = ({data}) => {
    const router = useRouter();

    useEffect(()=>{
        localStorage.getItem('auth') && router.replace('/dashboard');
    },[]);


  return (
    !localStorage.getItem('auth') ?
   ( <OtpHolder otp={data.generateOTP} />)
   :
   <></>

  )
}
