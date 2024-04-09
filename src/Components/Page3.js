import React from 'react'
import Page31 from './page31.jpeg';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
export default function Page3() {
    const nextpa=useNavigate();


 const nextpage=()=>{
   nextpa("/page4");
 }
  return (
  <div style={{width:'100vw',height:'100vw'}}>
  <div  class="bg-gray-300 rounded-lg" style={{width:'80%',marginLeft:'10%',marginRight:'10%',height:'4px'}}>
    <div  class="rounded-lg" style={{width:'40%',backgroundColor:  '#5FB5A3',height:'4px',marginTop:'2%'}}></div>
    </div>
    
   <div class="flex" id="onep3" >
   <div  id="twop3" >
    <img src={Page31} alt="" style={{height:'100%',width:'100%',marginTop:'15%'}}></img>
    </div>
 
    <div id="threep3">
        
    <p class="font-bold flex text-2xl " style={{marginTop:'1vw'}}>You're in right place</p>
       <p >Brilliant gets you hand-on to help improve your professional </p>
       <p>skills and knowledge.You'll interact with concepts and solve </p>
       <p >fun problems in math, science , and computer science</p>
        </div>
        </div>

        <div class="flex justify-center " id="fourp3"  >
        <button
         onClick={nextpage}
        className={`bg-black 'bg-opacity-50 cursor-not-allowed'} text-white py-2 px-4 rounded`}
      >
       Continue
      </button>
        
        </div>
   
  </div>
  )
}
