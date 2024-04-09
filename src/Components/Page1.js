import React, { useState } from 'react'
import Graduated from './Graduated.png'
import Manager from './Manager.png'
import Dad from './Dad.png'
import Learner from './Learner.png'
import Teacher from './Teacher.png'
import Other from './Other.png'
import arrow from './arrow.jpg'
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
export default function Page1() {
  const [clicked,setclicked]=useState(true);
  const [se,setse]=useState(null)
 const selected=(id)=>{
    setse(id);
    setclicked(false);
 }
 const nextpa=useNavigate();


 const nextpage=()=>{
   nextpa("/page2");
 }
  return (
    <div style={{width:'100vw',height:'100vw'}}>
     
      <div class="flex justify-between items-center"   style={{ width: '80%', marginLeft: '10%', marginRight: '10%', height: '4px',marginTop:'1%', position: 'relative' }}>
      
      
  <div   style={{ width: '95%', height: '100%' }}>
    <div className="bg-gray-300 rounded-lg" style={{ width: '100%', height: '100%', position: 'relative' }}>
      <div className="rounded-lg" style={{ width: '20%', backgroundColor: '#5FB5A3', height: '100%', position: 'relative' }}></div>
    </div>
  </div>
</div>

        <p class="font-bold flex justify-center " id="head11" style={{}}>Which describes you get ?</p>
        <p class="flex justify-center text-gray-600" id="head21" style={{marginTop:'1%'}}>This will help us personalize your experience.</p>

        <div class={`flex items-center justify-center `} id="one" onClick={()=>selected("one")} style={{marginTop:'1%',width:'100%',cursor:'pointer',position:'relative'}}>
          <div class="flex items-center rounded-lg border-gray-100" id="one1" style={{height:'100%',borderStyle:'solid',borderWidth:'2px',borderColor:se==="one"?'#EEBF07':'',position:'relative'}}>
            
            <img  src={Graduated} style={{height:'70%',width:'10%',marginLeft:'5%',marginRight:'5%'}}></img>
            
            <p class="flex items-center" >Student</p>
            <p class="flex items-center text-gray-600" style={{marginLeft:'3px'}}>or soon to be enrolled</p>
         
            </div>
        </div>
        <div class={`flex items-center justify-center `} id="two" onClick={()=>selected("two")}  style={{marginTop:'1%',width:'100%',cursor:'pointer',position:'relative'}}>
          <div class="flex items-center justify-start rounded-lg border-gray-100" id="two1" style={{height:'100%',borderStyle:'solid',borderWidth:'2px',borderColor:se==="two"?'#EEBF07':'',position:'relative'}}>
            <img  src={Manager} style={{height:'70%',width:'10%',marginLeft:'5%',marginRight:'5%'}}></img>
            <p class="flex items-center" >Professional</p>
            <p class="flex items-center text-gray-600" style={{marginLeft:'3px'}}>pursuing a carrer</p>
            </div>
        </div>
        <div class={`flex items-center justify-center `} id="three" onClick={()=>selected("three")}  style={{marginTop:'1%',width:'100%',cursor:'pointer',position:'relative'}}>
          <div class="flex items-center justify-start rounded-lg border-gray-100" id="three1" style={{height:'100%',borderStyle:'solid',borderWidth:'2px',borderColor:se==="three"?'#EEBF07':'',position:'relative'}}>
            <img  src={Dad} style={{height:'70%',width:'10%',marginLeft:'5%',marginRight:'5%'}}></img>
            <p class="flex items-center" >Parent</p>
            <p class="flex items-center text-gray-600" style={{marginLeft:'3px'}}>of a school-age child</p>
            </div>
        </div>
        <div class={`flex items-center justify-center `} id="four" onClick={()=>selected("four")} style={{marginTop:'1%',width:'100%',cursor:'pointer',position:'relative'}}>
          <div class="flex items-center justify-start rounded-lg border-gray-100" id="four1" style={{height:'100%',borderStyle:'solid',borderWidth:'2px',borderColor:se==="four"?'#EEBF07':'',position:'relative'}}>
            <img  src={Learner} style={{height:'70%',width:'10%',marginLeft:'5%',marginRight:'5%'}}></img>
            <p class="flex items-center" >Lifelong learner</p>
            </div>
        </div>
        <div class={`flex items-center justify-center `} id="five" onClick={()=>selected("five")}  style={{marginTop:'1%',width:'100%',cursor:'pointer',position:'relative'}}>
          <div class="flex items-center justify-start rounded-lg border-gray-100" id="five1" style={{height:'100%',borderStyle:'solid',borderWidth:'2px',borderColor:se==="five"?'#EEBF07':'',position:'relative'}}>
            <img  src={Teacher} style={{height:'70%',width:'10%',marginLeft:'5%',marginRight:'5%'}}></img>
            <p class="flex items-center" >Teacher</p>
            
            </div>
        </div>
        <div class={`flex items-center justify-center `} id="six"  onClick={()=>selected("six")} style={{marginTop:'1%',width:'100%',cursor:'pointer',position:'relative'}}>
          <div class="flex items-center justify-start rounded-lg border-gray-100" id="six1" style={{height:'100%',borderStyle:'solid',borderWidth:'2px',borderColor:se==="six"?'#EEBF07':'',position:'relative'}}>
            <img  src={Other} style={{height:'70%',width:'10%',marginLeft:'5%',marginRight:'5%'}}></img>
            <p class="flex items-center" >Other</p>
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
