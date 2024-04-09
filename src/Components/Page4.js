import React, { useState } from 'react'
import page41 from './page41.jpeg';
import page42 from './page42.jpeg';
import page43 from './page43.jpeg';
import page44 from './page44.jpeg';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
export default function Page4() {
    const [clicked,setclicked]=useState(true);
  const [se,setse]=useState(null)
 const selected=(id)=>{
    setse(id);
    setclicked(false);
 }
 const nextpa=useNavigate();


 const nextpage=()=>{
   nextpa("/page5");
 }
  return (
    <div style={{width:'100vw',height:'100vw'}}>
    <div  class="bg-gray-300 rounded-lg" style={{width:'80%',marginLeft:'10%',marginRight:'10%',height:'4px'}}>
    <div  class="rounded-lg" style={{width:'60%',backgroundColor:  '#5FB5A3',height:'4px',marginTop:'2%'}}></div>
    </div>
        <p class="font-bold flex justify-center  text-center" id="head14" style={{}}>What is your maths comfort level</p>
        <p class="flex justify-center text-gray-600 text-center" id="head24" style={{marginTop:'1vw'}}>Choose the highest level you feel confident in - you can always adjust later. </p>
        <div class="flex justify-between" style={{width:'80%',marginLeft:'10%',marginRight:'10%',marginTop:'10vw',height:'20%'}}>
        <div class="flex items-center  rounded-lg border-gray-100" id="one4" onClick={()=>selected("one4")}  style={{width:'24%',height:'100%',cursor:'pointer',borderStyle:'solid',borderWidth:'2px',borderColor:se==="one4"?'#EEBF07':'',backgroundImage:`url(${page41})`,backgroundSize: '100% 100%'}}>
          
            </div>
            <div class="flex items-center rounded-lg border-gray-100" id="two4" onClick={()=>selected("two4")}  style={{width:'24%',height:'100%',cursor:'pointer',borderStyle:'solid',borderWidth:'2px',borderColor:se==="two4"?'#EEBF07':'',backgroundImage:`url(${page42})`,backgroundSize: '100% 100%'}}>
          
            </div>
            <div class="flex items-center  rounded-lg border-gray-100" id="three4" onClick={()=>selected("three4")}  style={{width:'24%',height:'100%',cursor:'pointer',borderStyle:'solid',borderWidth:'2px',borderColor:se==="three4"?'#EEBF07':'',backgroundImage:`url(${page43})`,backgroundSize: '100% 100%'}}>
         
            </div>
            <div class="flex items-center rounded-lg border-gray-100" id="four4" onClick={()=>selected("four4")}  style={{width:'24%',height:'100%',cursor:'pointer',borderStyle:'solid',borderWidth:'2px',borderColor:se==="four4"?'#EEBF07':'',backgroundImage:`url(${page44})`,backgroundSize: '100% 100%'}}>
         
            </div>
        </div>
        <div class="flex justify-center " style={{marginTop:'3%'}} >
        <button
         onClick={nextpage}
        disabled={clicked}
        className={`bg-black ${clicked ? 'bg-opacity-50 cursor-not-allowed' : 'hover:bg-opacity-70'} text-white py-2 px-4 rounded`}
      >
       Continue
      </button>
        
        </div>
        </div>
  )
}
