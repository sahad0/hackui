import React, { Dispatch, FC, SetStateAction, memo, useState } from 'react'


interface AppProps{
    title:string,
    item:string[],
    color:string,
    setIsOpen:Dispatch<SetStateAction<boolean>>,
    setIsChildHovered:Dispatch<SetStateAction<boolean>>,
    handleDropdownClick:(index:number,selectedOption:string)=>void,
    stateKey:number,

}


const FilterParent:FC<AppProps> = ({item,title,color,setIsOpen,setIsChildHovered,handleDropdownClick,stateKey}) => {

    const [hasChild,setHasChild] = useState<boolean>(false);


  return (
    <div onMouseEnter={()=>setIsChildHovered(true)} onMouseLeave={()=>setIsChildHovered(false)} className='relative'>
        <div onMouseEnter={()=>{setHasChild(true)}} onMouseLeave={()=>{setIsOpen(false),setHasChild(false)}} className="flex flex-col py-3 px-10 text-sm sm:text-md text-gray-800 hover:bg-gray-100 ">
            {title}
            <span className={`text-xs sm:text-sm ${color}`}>{'(Ascending)'}</span>
        </div>


        <div  className="absolute  right-[100%]  bg-white rounded-md shadow-lg">
            {
                hasChild && item.length>0 && (
                    item.map((k,index)=>(
                        <div onClick={()=>{handleDropdownClick(stateKey,k),setIsOpen(false),setIsChildHovered(false)}} key={index} onMouseEnter={()=>setHasChild(true)} onMouseLeave={()=>setHasChild(false)} className='relative'>
                            <div  className="flex flex-col py-3 px-10 text-sm sm:text-md text-gray-800 hover:bg-gray-100 ">
                                {k}
                            </div>
                        </div>
                    ))
                )
            }
        </div>
      
    </div>
  )
}


export default FilterParent;