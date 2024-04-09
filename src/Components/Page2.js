import React, { useState } from 'react'
import page21 from './page21.png'
import page22 from './page22.png'
import page23 from './page23.png'
import page24 from './page24.png'
import page25 from './page25.png'
import Other from './Other.png'
import arrow from './arrow.jpg'
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
      <div className="rounded-lg" style={{ width: '40%', backgroundColor: '#5FB5A3', height: '100%', position: 'relative' }}></div>
    </div>
  </div>
</div>
        <p class="font-bold flex justify-center  text-center" id="head12" style={{}}>Which are you most interested in ?</p>
        <p class="flex justify-center text-gray-600 text-center" id="head22" style={{marginTop:'1%'}}>Choose just one.This will help us get you started(but won't limit your experience).</p>

        <div class={`flex items-center justify-center `} id="one2" onClick={()=>selected("one2")} style={{marginTop:'1%',width:'100%',cursor:'pointer'}}>
          <div class="flex items-center rounded-lg border-gray-100" id="one22" style={{height:'100%',borderStyle:'solid',borderWidth:'2px',borderColor:se==="one2"?'#EEBF07':''}}>
            
            <img  src={page21} style={{height:'70%',width:'10%',marginLeft:'5%',marginRight:'5%'}}></img>
            
            <p class="flex items-center" id="head32" >Learning specific skills to advance my carrer</p>
  
         
            </div>
        </div>
        <div class={`flex items-center justify-center `} id="two2" onClick={()=>selected("two2")}  style={{marginTop:'1%',width:'100%',cursor:'pointer'}}>
          <div class="flex items-center justify-start rounded-lg border-gray-100" id="two22" style={{height:'100%',borderStyle:'solid',borderWidth:'2px',borderColor:se==="two2"?'#EEBF07':''}}>
            <img  src={page22} style={{height:'70%',width:'10%',marginLeft:'5%',marginRight:'5%'}}></img>
            <p class="flex items-center" id="head42"  >Exploring new topics I'm interested in</p>
         
            </div>
        </div>
        <div class={`flex items-center justify-center `} id="three2" onClick={()=>selected("three2")}  style={{marginTop:'1%',width:'100%',cursor:'pointer'}}>
          <div class="flex items-center justify-start rounded-lg border-gray-100" id="three22" style={{height:'100%',borderStyle:'solid',borderWidth:'2px',borderColor:se==="three2"?'#EEBF07':''}}>
            <img  src={page23} style={{height:'70%',width:'10%',marginLeft:'5%',marginRight:'5%'}}></img>
            <p class="flex items-center" id="head52"  >Refreshing my maths foundations</p>
          
            </div>
        </div>
        <div class={`flex items-center justify-center `} id="four2" onClick={()=>selected("four2")} style={{marginTop:'1%',width:'100%',cursor:'pointer'}}>
          <div class="flex items-center justify-start rounded-lg border-gray-100" id="four22" style={{height:'100%',borderStyle:'solid',borderWidth:'2px',borderColor:se==="four2"?'#EEBF07':''}}>
            <img  src={page24} style={{height:'70%',width:'10%',marginLeft:'5%',marginRight:'5%'}}></img>
            <p class="flex items-center" id="head62"  >Excercising my brain to stay sharp</p>
            </div>
        </div>
        <div class={`flex items-center justify-center `} id="five2" onClick={()=>selected("five2")}  style={{marginTop:'1%',width:'100%',cursor:'pointer'}}>
          <div class="flex items-center justify-start rounded-lg border-gray-100" id="five22" style={{height:'100%',borderStyle:'solid',borderWidth:'2px',borderColor:se==="five2"?'#EEBF07':''}}>
            <img  src={page25} style={{height:'70%',width:'10%',marginLeft:'5%',marginRight:'5%'}}></img>
            <p class="flex items-center" id="head72"  >Something else</p>
            
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
