import React, { FC } from 'react'
import Image from "next/image";


interface AppProps {

}


export const Card:FC<AppProps> = () => {


  const arr = ['text-green-500','text-pink-500','text-blue-300','text-purple-500','text-yellow-500']


  return (
    <div className=" rounded-3xl shadow-lg  w-80 h-80 bg-white m-10 border border-gray-200">
    <div className="flex items-center m-10">
      <div>
        <Image src="/images/LandingPage/boy_h.png" alt="Profile picture" height={50} width={50} className="rounded-full mr-4 mt-10" />
        <div className="mt-10">
          <h2 className={`text-xl font-mono ${arr[Math.floor(Math.random()*3)]} `}>John Doe</h2>
          <p className="text-gray-600 text-sm">johndoe@example.com</p>
        </div>
        </div>
      <div className="flex flex-col items-center">
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
