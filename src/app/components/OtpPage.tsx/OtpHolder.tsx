'use client'


import React, { ChangeEvent, KeyboardEvent, useCallback, useRef, useState } from 'react'
import { OtpInput } from './OtpInput';
import { AiOutlineArrowRight } from "react-icons/ai";
import { Inter, Oswald } from 'next/font/google'

const oswald = Oswald({ subsets: ['latin'] })

//context for saving current active index
let currentActiveIndex:number = 0;

export const OtpHolder = () => {




    const [otp,setOtp] = useState<string[]>(new Array(6).fill(''));
    const [active,setActive]= useState<number>(0);

    const inputRef = useRef(null);


    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{  

        const {value} = e.target;
        const data = value.substring(value.length-1);
        setOtp((k)=>[...k].map((v,idx)=> idx === currentActiveIndex ? data : v));
        
        if(!value) setActive(currentActiveIndex-1);
        else setActive(currentActiveIndex+1);
          
    }

    const handleBackSpace = (e:KeyboardEvent<HTMLInputElement>,index:number)=>{
        currentActiveIndex = index;
        console.log(currentActiveIndex)
        if(e.key==='Backspace'){
            setActive(currentActiveIndex-1);
        }
    }



  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center'>
        <div className="otp-group flex flex-row ">
            {[...otp].map((digit, index) => (
                <div className='h-50 w-50 border-gray-400 m-2' key={index}>
                <div className="w-16 h-16 border border-gray-300 rounded-lg flex items-center justify-center">
                        <OtpInput index={index}  inputRef={inputRef} active={active} setActive={setActive}   handleChange={handleChange} handleBackSpace={handleBackSpace} otp={otp}  />
                </div>
                </div>
            ))}

        </div>
        <div className={`flex justify-center items-center font-sans mt-16`}>
            <div className="w-4 h-4 border-2 rounded-full border-t-white border-pink-300 animate-spin mr-5"></div>
            AutoFilling... your OTP
        </div>
        <button className="flex items-center justify-center w-16 h-16 rounded-full bg-black text-white hover:bg-gray-800 mt-10">
            <AiOutlineArrowRight size={30}/>
        </button>


    </div>
  )
}
