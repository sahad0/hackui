'use client';


import React, { FC, memo, useEffect, useState } from 'react'
import { GET_USERS } from '../../../../../graphql/queries';
import useSWR from 'swr';
import styles from './CardHolder.module.css'
import Card from './Card';
import { Users } from '../../../../../types/types';

interface AppProps {

}


async function fetcher() {
    const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL ? process.env.NEXT_PUBLIC_GRAPHQL_URL : '',{
      cache:'no-store',
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('auth') as string,
      },
      body: JSON.stringify({
        query: GET_USERS.loc?.source.body,
        variables:{search:{filter: 'All', sortBy: 'DateCreated', sortDir: 'Ascending', offset: 0, limit: 10}},
      }),
    });
  const data = await res.json();

  return data;  

}


 const CardHolder:FC<AppProps> = () => {

  console.log("rendering")

    const [users,setUsers] = useState<Users[]>([]);

    const { mutate } = useSWR(process.env.NEXT_PUBLIC_GRAPHQL_URL, { revalidateOnMount: false ,fetcher:()=>fetcher()});

    useEffect(()=>{
        fetchUsers();
    },[]);

    const fetchUsers = async () => {
        const {users} = (await mutate()).data.users;
        console.log(users);
        setUsers(users);
    }


  return (
    <div className='flex flex-row gap-2 justify-center  h-auto w-screen  m-0 p-0 flex-wrap mt-10 '>
        {users.length > 0 && (
        <>
            {
                users.map((k,index)=>(
                    <React.Fragment key={index}>
                        <Card item={k} />

                 </React.Fragment>
                ))
            }
        </>
     )}
    </div>

  )
}


export default memo(CardHolder);