
import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import { CiSliderHorizontal } from "react-icons/ci";
import { items } from '../data/FilterData';
import  FilterParent  from './FilterParent';
import { KeyTpes } from '../DashBoardNav';


interface AppProps {
    handleDropdownClick:(index:number,selectedOption:string)=>void,
    dropDownKeys:KeyTpes,
}



export const Filter:FC<AppProps> = ({handleDropdownClick,dropDownKeys}) => {

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
                            <FilterParent title={k.title} stateKey={index} item={k.item} color={k.color} setIsOpen={setIsOpen} setIsChildHovered={setIsChildHovered} handleDropdownClick={handleDropdownClick} dropDownKeys={dropDownKeys} />
                        </React.Fragment>
                    ))
                 )}
            </div>
        
        </>
  )
}
