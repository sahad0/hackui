'use client'


import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';

export const BackHandler = () => {
    const router = useRouter();

    useEffect(() => {
      const handleBackButton = (event:PopStateEvent) => {
        event.preventDefault();
        router.replace('/login');
      };
  
      window.addEventListener('popstate', handleBackButton);
  
      return () => {
        window.removeEventListener('popstate', handleBackButton);
      };
    }, []);

    return (
        <></>
    )
}
