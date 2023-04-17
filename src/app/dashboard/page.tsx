import React from "react";
import { BackHandler } from "../components/DashBoardPage/BackHandler";
import { DashBoardNav } from "../components/DashBoardPage/DashBoardNav";
import  CardHolder  from "../components/DashBoardPage/CardCmponent/CardsHolder";
import  Card  from "../components/DashBoardPage/CardCmponent/Card";

interface AppProps {

}



const DashBoard = async()=> {



  return (
    <div className="flex w-screen h-screen   flex-1 flex-col overflow-x-hidden">
        <BackHandler />
        <DashBoardNav />

    </div>
  )
}


export default DashBoard;


