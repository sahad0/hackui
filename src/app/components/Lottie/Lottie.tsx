'use client'

import { FC, useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import { Loader } from '../Loader/Loader';

interface ComponentProps {
    path:string,
}


const LottieComp:FC<ComponentProps> = ({path}) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    async function fetchAnimation() {
      const res = await fetch(path);
      const animationData = await res.json();
      setAnimationData(animationData);
    }
    fetchAnimation();
  }, []);

  if (!animationData) {
    return null;
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className=' w-auto overflow-hidden'>
    <Lottie options={defaultOptions}   />
    </div>
  );
}

export default LottieComp;