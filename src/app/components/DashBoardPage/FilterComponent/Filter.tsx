'use client'

import React, { FC, useState } from 'react'
import { CiSliderHorizontal } from "react-icons/ci";
import { items } from '../data/FilterData';
import { FilterParent } from './FilterParent';


interface AppProps {

}



export const Filter:FC<AppProps> = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);


  return (
        <>
            <button onClick={()=>setIsOpen((k)=>!k)} className="bg-black text-white rounded-md p-2">
                <CiSliderHorizontal size={25} />
            </button>
            <div  className="absolute top-full right-0 mt-2 bg-white rounded-md shadow-lg">
                 {isOpen && (
                    items.map((k)=>(
                        <FilterParent title={k.title} item={k.item} color={k.color} />
                    ))
                 )}
            </div>
        
        </>
  )
}
