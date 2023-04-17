import React, { Dispatch, FC, KeyboardEvent, SetStateAction, useEffect, useState } from 'react'
import { Users } from '../../../../../types/types';


interface AppProps  {
    setSearchVisibile : Dispatch<SetStateAction<boolean>>,
    getUsers : (searchFlag:boolean,text:string)=>void,
}

export const SearchBar:FC<AppProps> = ({setSearchVisibile,getUsers,}) => {

    const [searchValue,setSearchValue] = useState<string>('');



    const handleSearch = async(e:KeyboardEvent<HTMLInputElement>)=>{
        if(e.key === 'Enter' && searchValue!==''){
            getUsers(true,searchValue);
            
            setSearchVisibile(false);


            

        }
        else if (e.key === 'Enter' && searchValue===''){
            getUsers(false,'');
            setSearchVisibile(false);


            
        }
    }

  return (
    <div className="absolute  top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10  ">
    <div className="w-screen ">
    <div className="relative flex justify-center">
        <input
            value={searchValue}
            autoFocus
            type="text"
            placeholder="Find Devs by email or name... "
            className="block font-mono  w-11/12 md:w-[600px] h-12 pl-4 pr-5 py-2 rounded-lg outline-none border border-gray-300"
            onKeyDown={handleSearch}
            onChange={(e)=>setSearchValue(e.target.value)}
            
        />

    
    </div>
    </div>
</div>
  )
}
