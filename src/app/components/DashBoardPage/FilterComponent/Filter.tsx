'use client'

import React, { FC, useState } from 'react'
import { CiSliderHorizontal } from "react-icons/ci";
import { items } from '../data/FilterData';
import { FilterParent } from './FilterParent';


interface AppProps {

}



export const Filter:FC<AppProps> = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isChildHovered,setIsChildHovered] = useState<boolean>(false);


  return (
        <>
            <button onMouseEnter={()=>setIsOpen(true)} onMouseLeave={()=>{setIsOpen(false),setIsChildHovered(false)}} className="bg-black text-white rounded-md p-2">
                <CiSliderHorizontal size={25} />
            </button>
            <div  className="absolute top-full right-0 mt-0 bg-white rounded-md shadow-lg">
                 {(isOpen || isChildHovered)  && (
                    items.map((k,index)=>(
                        <React.Fragment key={index}>
                            <FilterParent title={k.title} item={k.item} color={k.color} isOpen={isOpen}  setIsOpen={setIsOpen} setIsChildHovered={setIsChildHovered} />
                        </React.Fragment>
                    ))
                 )}
            </div>
        
        </>
  )
}
