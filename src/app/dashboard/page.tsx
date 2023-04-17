import React from "react";
import { BackHandler } from "../components/DashBoardPage/BackHandler";
import { DashBoardNav } from "../components/DashBoardPage/DashBoardNav";

interface AppProps {

}



const DashBoard = async()=> {



  return (
    <>
    <BackHandler />
    <DashBoardNav />

    {/* <div className="font-mono text-xl text-gray-500 m-20 flex items-center justify-center">
      Best Picks for you
    </div> */}
   

  

    </>
      
  )
}


export default DashBoard;


