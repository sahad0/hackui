'use client'


import React, { ChangeEvent, FC, KeyboardEvent, useCallback, useEffect, useRef, useState } from 'react'
import { OtpInput } from './OtpInput';
import { AiOutlineArrowRight } from "react-icons/ai";
import { Inter, Oswald } from 'next/font/google'
import {motion} from 'framer-motion'
import { animateNext } from './animationFrame';
import { useRouter } from 'next/navigation';
import { getClient } from '@components/app/lib/client/Provider';
import { LOGIN } from '../../../../graphql/mutations';
import useSWR from 'swr';

const oswald = Oswald({ subsets: ['latin'] });

type OTP = {
    otp : string,
}

interface AppProps extends OTP{
    handleChange?:()=>void,
    handleBackSpace?:()=>void,
    loginHandler?:()=>Promise<void>,
    
}

//context for saving current active index
let currentActiveIndex:number = 0;

async function fetcher({otp}:{otp:string}) {
    try{
        const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL ? process.env.NEXT_PUBLIC_GRAPHQL_URL : '',{
            cache:'no-store',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              query: LOGIN.loc?.source.body,
              variables:{input:{email:process.env.NEXT_PUBLIC_EMAIL,otp:otp}},
            }),
          });
        const data = await res.json();
        return data;
    }
    catch(e){
        alert('No network')
    }
  }



export const OtpHolder:FC<AppProps> = ({otp:otpFromServer}) => {




    const [otp,setOtp] = useState<string[]>(new Array(5).fill(''));
    const [loader,setLoader] = useState<boolean>(true);
    const [active,setActive]= useState<number>(0);
    const inputRef = useRef(null);
    const { mutate } = useSWR(process.env.NEXT_PUBLIC_GRAPHQL_URL, { revalidateOnMount: false ,fetcher:()=>fetcher({otp:otpFromServer})});


    const router = useRouter();

    useEffect(()=>{
        const x = setTimeout(()=>{
            setOtp([...otpFromServer.split('')]);
            setLoader(false);
        },3000);

        ()=> {return clearInterval(x)}
    },[]);


    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{  

        const {value} = e.target;
        const data = value.substring(value.length-1);
        setOtp((k)=>[...k].map((v,idx)=> idx === currentActiveIndex ? data : v));
        
        if(!value) setActive(currentActiveIndex-1);
        else setActive(currentActiveIndex+1);
          
    }

    const handleBackSpace = (e:KeyboardEvent<HTMLInputElement>,index:number)=>{
        currentActiveIndex = index;
        if(e.key==='Backspace'){
            setActive(currentActiveIndex-1);
        }
    }
    

    const loginHandler = async() =>{
        try {
            const {sessionToken} = (await mutate()).data.login;
            localStorage.setItem('auth',sessionToken);
            router.replace('/dashboard');
        } catch (error) {
           alert('No Network !'); 
        }
        
    }



  return (
    <motion.div variants={animateNext} initial="initial" animate="animate" transition={{ease:'easeIn'}} className='w-screen h-screen flex flex-col items-center justify-center'>
        <div className="otp-group flex flex-row ">
            {[...otp].map((digit, index) => (
                <div className='h-50 w-50 border-gray-400 m-2' key={index}>
                <div className="w-12 h-12  sm:h-16 sm:w-16  border border-gray-300 rounded-lg flex items-center justify-center">
                        <OtpInput index={index}  inputRef={inputRef} active={active} setActive={setActive}   handleChange={handleChange} handleBackSpace={handleBackSpace} otp={otp}  />
                </div>
                </div>
            ))}

        </div>
        
                <div className={`flex justify-center items-center font-sans mt-16`}>
                    {loader ? (<>
                        <div className="w-4 h-4 border-2 rounded-full border-t-white border-pink-300 animate-spin mr-5"></div>
                        AutoFilling... your OTP
                    </>)
                    :
                    <motion.div variants={animateNext} initial="initial" animate="animate" transition={{ease:'easeIn'}} className='flex flex-row'>
                        <div className='text-pink-400 mr-2'>Get </div>    
                        <div>to the meta</div>
                    </motion.div>
                }
                    </div>
        
        <button disabled={loader} onClick={loginHandler} className="flex items-center justify-center w-16 h-16 rounded-full bg-black text-white hover:bg-gray-800 mt-10">
            <AiOutlineArrowRight size={30}/>
        </button>


    </motion.div>
  )
}
