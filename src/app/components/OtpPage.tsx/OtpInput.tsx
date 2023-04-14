import React, { ChangeEvent, Dispatch, FC, KeyboardEvent, MutableRefObject, SetStateAction, useEffect } from 'react'



interface AppProps {

    index : number,
    otp : string[],
    inputRef : MutableRefObject<null | HTMLInputElement>,
    active:number,
    setActive:Dispatch<SetStateAction<number>>,
    handleChange : (e:ChangeEvent<HTMLInputElement>, index:number)=>void,
    handleBackSpace:(e:KeyboardEvent<HTMLInputElement>,index:number)=>void,

}

export const OtpInput:FC<AppProps> = ({index,inputRef,active,setActive,handleChange,handleBackSpace,otp}) => {


    
    useEffect(()=>{
        inputRef.current?.focus();
    },[active]);
    
    
 
    // const handleBackSpace



  return (
    <input type="text"  onKeyDown={(e)=>handleBackSpace(e,index)}  ref={active === index ? inputRef : null}  onFocus={()=>{setActive(index)}}   onChange={(e)=>{handleChange(e,index)}}     className="text-center text-2xl w-full h-full bg-transparent focus:outline-none" value={otp[index]}  />
  )
}
