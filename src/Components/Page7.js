import React,{useState} from 'react'
import page71 from './page71.jpeg';
export default function Page7() {
    const [clicked,setclicked]=useState(true);
    const [se,setse]=useState(null)
   const selected=(id)=>{
      setse(id);
      setclicked(false);
   }
  return (
    <div style={{width:'100vw',height:'100vw'}}>
      <p class="font-bold flex justify-center  text-center" id="head17" style={{}}>Learning Paths based on your answers</p>
        <p class="flex justify-center text-gray-600 text-center" id="head27" style={{marginTop:'1vw'}}>Choose one to get started.You can switch anytime.</p>

<div class="flex justify-around items-center" id="five7">

          <div class="flex items-center justify-between rounded-lg border-gray-100" id="one7" onClick={()=>selected("one7")} style={{borderStyle:'solid',borderWidth:'2px',position:'relative',cursor:'pointer',borderColor:se==="one7"?'#EEBF07':''}}>
          <span class="bg-yellow-400  text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg" id="eight7" >Most Popular</span>
           <div class="flex flex-col" id="three7" >
            <div class="flex">
            <p class="font-bold" style={{marginRight:'2px'}}>Foundational Math </p>
            <p >Bulid</p>
            </div>
            <p>Your foundational skills in</p>
            <p>algebra, geometry, and</p>
            <p>probability.</p>

            </div>
<div id="six7" style={{backgroundImage:`url(${page71})`,backgroundSize:'100% 100%'}}>
   
</div>
            </div>
      
            <div class="flex items-center justify-between rounded-lg border-gray-100" id="two7" onClick={()=>selected("two7")} style={{borderStyle:'solid',borderWidth:'2px',cursor:'pointer',borderColor:se==="two7"?'#EEBF07':''}}>
         
            <div class="flex flex-col" id="four7" >
            
             <p class="font-bold" style={{marginRight:'2px'}}>Mathematical Thinking </p>
             
            
             <p>Bulid your foundational </p>
             <p>skills in algebra, geometry,</p>
             <p>and probability.</p>
 
             </div>
 <div id="seven7" style={{backgroundImage:`url(${page71})`,backgroundSize:'100% 100%'}}>
    
 </div>
             </div>
          
</div>
    </div>
  )
}
