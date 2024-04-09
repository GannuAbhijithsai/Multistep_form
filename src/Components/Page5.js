import React from 'react'
import Page51 from './page51.jpeg';
import page52 from './page52.jpeg';
import arrow from './arrow.jpg';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
export default function Page5() {
    const nextpa=useNavigate();


 const nextpage=()=>{
   nextpa("/page6");
 }
 const back=()=>{
  nextpa(-1);
}
  return (
  <div style={{width:'100vw',height:'100vw'}}>
   <div class="flex justify-between items-center"   style={{ width: '80%', marginLeft: '10%', marginRight: '10%', height: '4px',marginTop:'1%', position: 'relative' }}>
      
   <div id="arr" onClick={back}  style={{backgroundImage:`url(${arrow})`,backgroundSize:'100% 100%',backgroundColor:'white',cursor:'pointer'}}>
    
    </div>
  <div   style={{ width: '95%', height: '100%' }}>
    <div className="bg-gray-300 rounded-lg" style={{ width: '100%', height: '100%', position: 'relative' }}>
      <div className="rounded-lg" style={{ width: '100%', backgroundColor: '#5FB5A3', height: '100%', position: 'relative' }}></div>
    </div>
  </div>
</div>
    
   <div class="flex" id="onep5">
   <div  id="twop5">
    <img src={Page51} alt="" style={{height:'100%',width:'100%',marginTop:'15%'}}></img>
    </div>
 
    <div id="threep5">
        
    <p class="font-bold flex " id="head15" style={{marginTop:'1vw'}}>You're on Your way</p>
    <img src={page52} alt="" style={{width:'30%',height:'15%'}}></img>
       <p style={{fontStyle:'italic'}} id="head25">"Through it's engaging and well structured courses,Brilliant has taught me</p>
       <p style={{fontStyle:'italic'}} id="head35">mathematical concepts that i previously struggled to understand. I now feel</p>
       <p style={{fontStyle:'italic'}}id="head45" >confident approaching both technical job interviews and real world problem</p>
       <p style={{fontStyle:'italic'}} id="head55">solving situations."</p>

       <p style={{fontStyle:'italic',marginTop:'1vw'}} id="head65">-Jacob S.</p>

        </div>
        </div>

        <div class="flex justify-center " id="fourp5"  >
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

