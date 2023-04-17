
import { Inter } from 'next/font/google'
import { getClient } from '../lib/client/Provider';
import { GENERATE_OTP } from '../../../graphql/mutations';
import { OtpHolder } from '../components/OtpPage.tsx/OtpHolder';
import { OtpParent } from '../components/OtpPage.tsx/OtpParent';

interface AppProps {
  data:number[],
}




const inter = Inter({ subsets: ['latin'] })


const Otp = async()=> {

const {data}= await getData();



  return (
    <div className="flex flex-col overflow-hidden ">
        <OtpParent data={data} />
    </div>
  )
}



 async function getData() {


  const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL?process.env.NEXT_PUBLIC_GRAPHQL_URL:'', {
    cache:'no-store',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: GENERATE_OTP.loc?.source.body,
      variables:{input:{email:process.env.NEXT_PUBLIC_EMAIL,phone:null}},
    }),
  });
  return res.json();


}
export default Otp;
