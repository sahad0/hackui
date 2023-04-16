import React, { FC, useState } from 'react'


interface AppProps{
    title:string,
    item:string[],
    color:string
}


export const FilterParent:FC<AppProps> = ({item,title,color}) => {

    const [hasChild,setHasChild] = useState<boolean>(false);


  return (
    <div className='relative'>
        <div onClick={()=>setHasChild((k)=>!k)} className="flex flex-col py-3 px-10 text-sm sm:text-md text-gray-800 hover:bg-gray-100 ">
            {title}
            <span className={`text-xs sm:text-sm text-${color}-400`}>{'(Ascending)'}</span>
        </div>


        <div  className="absolute  right-[100%] mt-2 bg-white rounded-md shadow-lg">
            {
                hasChild && item.length>0 && (
                    item.map((k)=>(
                        <div className='relative'>
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
