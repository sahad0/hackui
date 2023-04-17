import React, { Dispatch, FC, SetStateAction, useState } from 'react'


interface AppProps{
    title:string,
    item:string[],
    color:string,
    isOpen:boolean,
    setIsOpen:Dispatch<SetStateAction<boolean>>,
    setIsChildHovered:Dispatch<SetStateAction<boolean>>,
}


export const FilterParent:FC<AppProps> = ({item,title,color,setIsOpen,setIsChildHovered}) => {

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
                    item.map((k)=>(
                        <div onMouseEnter={()=>setHasChild(true)} onMouseLeave={()=>setHasChild(false)} className='relative'>
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
