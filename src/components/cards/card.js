import React from "react";
import { CirclePlus,CircleMinus } from 'lucide-react';
function Scorecard({score,increaseScore,decreaseScore,teamName,winner}) {
   const isWinner=winner===teamName
    return(
        <div className='bg-white m-5 w-auto md:w-1/3 rounded-lg shadow-lg'>
        
        <h1 className='text-3xl text-center my-4 border-b-2 text-blue-500 pb-4'>{teamName}{isWinner?"🏆 ":""}
        </h1>
        
        <h3 className=' text-5xl md:text-8xl text-center  text-blue-500 '>{score}</h3>
        {
          winner? null :(
        <div className='flex justify-around mb-5 mt-4 md:mt-12'>
           <CirclePlus size={60} onClick={
              increaseScore
           } />
           <CircleMinus size={60} onClick={
              decreaseScore
           }/>

        </div>)}
      </div>
       
    )
}
export default Scorecard;