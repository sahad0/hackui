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
        typeof window !== 'undefined' && localStorage.getItem('auth') && router.replace('/dashboard');
    },[]);


  return (
    typeof window !== 'undefined' && !localStorage.getItem('auth') ?
   ( <OtpHolder otp={data.generateOTP} />)
   :
   <></>

  )
}
