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
    </>
      
  )
}


export default DashBoard;


