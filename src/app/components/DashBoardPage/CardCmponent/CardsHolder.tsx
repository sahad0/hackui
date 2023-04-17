'use client';


import React, { FC, memo, useEffect, useState } from 'react'
import { GET_USERS } from '../../../../../graphql/queries';
import useSWR from 'swr';
import styles from './CardHolder.module.css'
import Card from './Card';
import { Users } from '../../../../../types/types';
import {motion} from 'framer-motion';

interface AppProps {
  users:Users[];
}




 const CardHolder:FC<AppProps> = ({users}) => {





  return (
    <div  className='flex flex-row gap-2 justify-center  h-auto w-screen  m-0 p-0 flex-wrap mt-10 '>
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