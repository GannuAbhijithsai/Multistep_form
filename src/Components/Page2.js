import React, { useState } from 'react'
import Graduated from './Graduated.png'
import Manager from './Manager.png'
import Dad from './Dad.png'
import Learner from './Learner.png'
import Teacher from './Teacher.png'
import Other from './Other.png'
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
export default function Page2() {
  const [clicked,setclicked]=useState(true);
  const [se,setse]=useState(null)
 const selected=(id)=>{
    setse(id);
    setclicked(false);
 }
 const nextpa=useNavigate();


 const nextpage=()=>{
   nextpa("/page3");
 }
  return (
    <div style={{width:'100vw',height:'100vw'}}>
   
    <div  class="bg-gray-300 rounded-lg" style={{width:'80%',marginLeft:'10%',marginRight:'10%',height:'4px'}}>
    <div  class="rounded-lg" style={{width:'40%',backgroundColor:  '#5FB5A3',height:'4px',marginTop:'2%'}}></div>
    </div>
        <p class="font-bold flex justify-center  text-center" id="head12" style={{marginTop:'1%'}}>Which are you most interested in ?</p>
        <p class="flex justify-center text-gray-600 text-center" id="head22" style={{marginTop:'1%'}}>Choose just one.This will help us get you started(but won't limit your experience).</p>

        <div class={`flex items-center justify-center `} id="one2" onClick={()=>selected("one2")} style={{marginTop:'1%',width:'100%',cursor:'pointer'}}>
          <div class="flex items-center rounded-lg border-gray-100" id="one22" style={{height:'100%',borderStyle:'solid',borderWidth:'2px',borderColor:se==="one2"?'#EEBF07':''}}>
            
            <img  src={Graduated} style={{height:'70%',width:'10%',marginLeft:'5%',marginRight:'5%'}}></img>
            
            <p class="flex items-center" >Learning specific skills to advance my carrer</p>
  
         
            </div>
        </div>
        <div class={`flex items-center justify-center `} id="two2" onClick={()=>selected("two2")}  style={{marginTop:'1%',width:'100%',cursor:'pointer'}}>
          <div class="flex items-center justify-start rounded-lg border-gray-100" id="two22" style={{height:'100%',borderStyle:'solid',borderWidth:'2px',borderColor:se==="two2"?'#EEBF07':''}}>
            <img  src={Manager} style={{height:'70%',width:'10%',marginLeft:'5%',marginRight:'5%'}}></img>
            <p class="flex items-center" >Exploring new topics I'm interested in</p>
         
            </div>
        </div>
        <div class={`flex items-center justify-center `} id="three2" onClick={()=>selected("three2")}  style={{marginTop:'1%',width:'100%',cursor:'pointer'}}>
          <div class="flex items-center justify-start rounded-lg border-gray-100" id="three22" style={{height:'100%',borderStyle:'solid',borderWidth:'2px',borderColor:se==="three2"?'#EEBF07':''}}>
            <img  src={Dad} style={{height:'70%',width:'10%',marginLeft:'5%',marginRight:'5%'}}></img>
            <p class="flex items-center" >Refreshing my maths foundations</p>
          
            </div>
        </div>
        <div class={`flex items-center justify-center `} id="four2" onClick={()=>selected("four2")} style={{marginTop:'1%',width:'100%',cursor:'pointer'}}>
          <div class="flex items-center justify-start rounded-lg border-gray-100" id="four22" style={{height:'100%',borderStyle:'solid',borderWidth:'2px',borderColor:se==="four2"?'#EEBF07':''}}>
            <img  src={Learner} style={{height:'70%',width:'10%',marginLeft:'5%',marginRight:'5%'}}></img>
            <p class="flex items-center" >Excercising my brain to stay sharp</p>
            </div>
        </div>
        <div class={`flex items-center justify-center `} id="five2" onClick={()=>selected("five2")}  style={{marginTop:'1%',width:'100%',cursor:'pointer'}}>
          <div class="flex items-center justify-start rounded-lg border-gray-100" id="five22" style={{height:'100%',borderStyle:'solid',borderWidth:'2px',borderColor:se==="five2"?'#EEBF07':''}}>
            <img  src={Teacher} style={{height:'70%',width:'10%',marginLeft:'5%',marginRight:'5%'}}></img>
            <p class="flex items-center" >Something else</p>
            
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
