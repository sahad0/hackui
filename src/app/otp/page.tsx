import { Inter } from 'next/font/google'
import { getClient } from '../lib/client/Provider';
import { GENERATE_OTP } from '../../../graphql/mutations';
import axios from 'axios';
import { gql } from 'graphql-tag';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { OtpHolder } from '../components/OtpPage.tsx/OtpHolder';

interface AppProps {
  data:number[],
}




const inter = Inter({ subsets: ['latin'] })

async function getData() {
  
  const client = getClient();
  
  try {
 
    const {data} = await client.mutate({
      mutation:GENERATE_OTP,
      variables:{email: 'superadmin@example.com',phone:null}
    });

    return data;
  
  } catch (error) {
    console.error(error);
  }
}

const Otp = async()=> {

  const data = await getData();
  console.log(data.generateOTP);




  return (
    <main className="flex flex-col ">

        <OtpHolder />

    </main>
  )
}


export default Otp;
