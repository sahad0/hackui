'use client'

import { FC, useEffect, useState } from 'react';
import Lottie from 'react-lottie';

interface ComponentProps {
    path:string,
}


const LottieComp:FC<ComponentProps> = ({path}) => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: path,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className=' w-auto overflow-hidden max-h-[95%]'>
    <Lottie options={defaultOptions}    />
    </div>
  );
}

export default LottieComp;