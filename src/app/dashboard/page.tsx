import React from "react";
import { BackHandler } from "../components/DashBoardPage/BackHandler";
import { DashBoardParent } from "../components/DashBoardPage/DashBoardParent";


interface AppProps {

}



const DashBoard = async()=> {



  return (
    <div className="flex w-screen h-screen   flex-1 flex-col overflow-x-hidden">
        <BackHandler />
        <DashBoardParent />

    </div>
  )
}


export default DashBoard;


