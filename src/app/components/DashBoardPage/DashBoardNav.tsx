'use client';

import React, { FC, useEffect, useRef, useState ,} from 'react';
import { KeyboardEvent as KeyEvent } from 'react';
import useSWR from 'swr';
import { Oswald } from 'next/font/google'
import { GET_USERS } from '../../../../graphql/queries';
import { Filter } from './FilterComponent/Filter';
import  CardHolder  from './CardCmponent/CardsHolder';
import { Users } from '../../../../types/types';


const oswald = Oswald({ subsets: ['latin'] })


interface AppProps {

}

type KeyTpes= {
    key1:string,
    key2:string,
    key3:string,
}




async function fetcher({key1,key2,key3}:KeyTpes) {
      const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL ? process.env.NEXT_PUBLIC_GRAPHQL_URL : '',{
        cache:'no-store',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('auth') as string,
        },
        body: JSON.stringify({
          query: GET_USERS.loc?.source.body,
          variables:{search:{filter: key1, sortBy: key2, sortDir: key3, offset: 0, limit: 10}},
        }),
      });
    const data = await res.json();

    return data;  

}


export const DashBoardNav:FC<AppProps> = () => {

    const [searchValue,setSearchValue] = useState<string>('');
    const [searchVisible,setSearchVisibile] = useState<boolean>(false);
    const [users,setUsers] = useState<Users[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const [dropDownKeys, setDropDownKeys] = useState<KeyTpes>({key1: "All",key2: "DateCreated",key3: "Ascending"});
    const { mutate } = useSWR(process.env.NEXT_PUBLIC_GRAPHQL_URL, { revalidateOnMount: false ,fetcher:()=>fetcher({key1:dropDownKeys.key1,key2:dropDownKeys.key2,key3:dropDownKeys.key3})});


    useEffect(()=>{
        getUsers();
    },[]);


    useEffect(() => {
        function handleKeyDown(e:KeyboardEvent) {
            if (e.ctrlKey && e.key === ' ') {
                e.preventDefault();
                setSearchVisibile((k)=>!k);
            }

        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
        window.removeEventListener('keydown', handleKeyDown);
        };
    }, [inputRef]);


    useEffect(()=>{
        getUsers();
    },[dropDownKeys]);



    const getUsers = async()=>{
        const {users} = (await mutate()).data.users;
        setUsers(users);
    }


    const handleSearch = async(e:KeyEvent<HTMLInputElement>)=>{
        if(e.key === 'Enter' && searchValue!==''){
            const {users} = (await mutate()).data.users;
            console.log(users);
            setSearchVisibile(false);
            

        }
    }

    function handleDropdownClick(index:number, selectedOption:string) {
        const key = `key${index + 1}`;
        setDropDownKeys(prevState => ({
          ...prevState,
          [key]: selectedOption
        }));
      }



  return (
    <>
    <div className={`${searchVisible && 'blur-[4px] '}`}>
        

        {/* Navbar */}
        <div onClick={()=>{searchVisible ? setSearchVisibile(false) : null}} className={`w-screen  flex justify-center  h-24 `}>
            <div className="w-screen ">
                <div className="relative flex flex-row  w-screen mt-5">

                    <div className={`${oswald.className} w-[20%] flex justify-center items-center text-xl`}>
                        Home
                    </div>
                    <div className=' w-[60%]'>
                      
                    </div>
                    <div className={`relative w-[20%] flex justify-end items-center mr-[4%] sm:mr-[4%]`}>
                        <Filter handleDropdownClick={handleDropdownClick} />

                    </div>

                    
                </div>
            </div>
        </div>
        


        {/* CardDisplay Component */}
        <CardHolder users={users} />

    </div>


    {/* Absolute_Content */}
    {
            searchVisible && (
                <div className="absolute  top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10  ">
                    <div className="w-screen ">
                    <div className="relative flex justify-center">
                        <input
                            autoFocus
                            type="text"
                            placeholder="Search"
                            className="block  w-11/12 md:w-[600px] h-12 pl-4 pr-5 py-2 rounded-lg outline-none border border-gray-300"
                            onKeyDown={handleSearch}
                            onChange={(e)=>setSearchValue(e.target.value)}
                        />

                    
                    </div>
                    </div>
                </div>
            )
        }
    </>
    
  )
  
}


