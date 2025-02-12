 import React from 'react';
import toast ,{Toaster} from 'react-hot-toast';
 import { useState,useEffect } from 'react';
 import "./../../index.css"
 import Scorecard  from '../../components/cards/card';

 function Home() {
  const MAX_SCORE=1;
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [winner,setWinner]=useState(null);
  useEffect(()=>{
    if(scoreA<MAX_SCORE && scoreB<MAX_SCORE){
      return;
    }
    if(scoreA===MAX_SCORE){
      setWinner("Team A");
      toast.success("Team A Wins");
    }
    if(scoreB===MAX_SCORE){
      setWinner("Team B");
      toast.success("Team B Wins");
    }
  },[scoreA,scoreB]);
   return (
     <div className='bg-blue-100 min-h-screen p-10'>
       <h1 className='text-center text-3xl md:text-5xl py-4 md:py-10 border-2 border-blue-400 border-dotted rounded-md text-blue-500 bg-blue-200'>Score Keeper</h1>
       
       <div className='flex flex-col md:flex-row justify-around'>
         <Scorecard score={scoreA} increaseScore={()=>setScoreA(scoreA+1)} decreaseScore={()=>setScoreA(scoreA-1)} teamName="Team A" winner={winner}/>
          <Scorecard score={scoreB} increaseScore={()=>setScoreB(scoreB+1)} decreaseScore={()=>setScoreB(scoreB-1)} teamName="Team B" winner={winner}/>

       </div>
       {winner?<p className='text-center md:text-2xl py-5'>Winner team is <b className='underline decoration-wavy mx-4 bg-yellow-400'>{winner}🏆🏆🏆🏆</b>.Click reset to start again</p>:null}
       
       <div className='flex justify-center'>  
         <button className=' bg-blue-500 px-10 py-3 text-5xl text-white rounded-lg shadow-lg' 
           onClick={()=>{
            setScoreA(0);
            setScoreB(0);
            setWinner(null);
           }}         
         >Reset</button>
       </div>
        <Toaster/>
     </div>
     
   );
 }
 export default Home;   