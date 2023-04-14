import { useState, useEffect, FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { variantsTypewriter } from './varientsConf';

interface AppProps {
    text:string
}



const Typewriter:FC<AppProps> = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [visible,setVisible] = useState<boolean>(true);

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayText(text.slice(0, currentIndex));
      currentIndex++;
      if (currentIndex > text.length) clearInterval(intervalId);
    }, 100);
    return () => clearInterval(intervalId);
  }, [text]);


  return (
    <AnimatePresence>
        {
           visible && ( 
            <motion.span variants={variantsTypewriter}  >
            {displayText}
            </motion.span>
           )
        }
    </AnimatePresence>
  );
};

export default Typewriter;