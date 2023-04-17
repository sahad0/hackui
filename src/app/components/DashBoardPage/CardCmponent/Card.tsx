import React, { FC, memo } from 'react'
import Image from "next/image";
import { Users } from '../../../../../types/types';


interface AppProps {
  item: Users,
}




const Card:FC<AppProps> = ({item}) => {
  
  



  const arr = ['text-green-500','text-pink-500','text-blue-300','text-purple-500','text-yellow-500']

  const arr1 = ['md:w-[30%]','md:w-[60%]','md:w-[40%]','md:w-[35%]','md:w-[70%]','md:w-[35%]',]


  return (
    <div className={` rounded-3xl shadow-lg w-[100%] flex-wrap  m-10  bg-white  border border-gray-200 object-contain ${arr1[Math.floor(Math.random()*3)]}`}>
    <div className="flex items-center m-10 flex-col md:flex-row justify-between ">
        
        <div>
          <Image src="/images/LandingPage/boy_h.png" alt="Profile picture" height={50} width={50} className="rounded-full mr-4 mt-10" />
          <div className="mt-10">
            <h2 className={`text-xl font-mono ${arr[Math.floor(Math.random()*3)]} `}>John Doe</h2>
            <p className="text-gray-600 text-sm">johndoe@example.com</p>
          </div>
        </div>

        <div className="flex flex-col items-center mt-16 md:mt-0">
          <button className="bg-black rounded-full shadow-md py-2 px-4 text-white">
            $50/h 
          </button>
          <div className="mt-5 text-gray-400">
            Hire
          </div>

        </div>
    </div>
    </div>
  )
}

export default Card;
