import React,{useEffect} from 'react';
import Loader from './Loader.gif';
import { useNavigate } from "react-router-dom";
export default function Page6() {
    const nextpa=useNavigate();
    useEffect(() => {
 
       
        setTimeout(() => {
           


           
              nextpa("/page7");
            
           
        }, 3000);
    }, []);
  return (
   <div style={{width:'100vw',height:'100vw'}}>
   <div class="grid place-items-center "  id="onep6" style={{width:'100%'}}>
    
   
   <div class="flex flex-col items-center">
   <img src={Loader} alt="" style={{height:'10vw',width:'10vw'}}></img>
   <p class="font-bold flex text-center" id="head16">Finding Learning Path  recommendations for you based on</p>
   <p class="font-bold flex  text-center" id="head26">Your responses</p>
   </div>
   </div>
 
   </div>
  )
}
