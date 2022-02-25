import { useState,useEffect } from "react";

const Example=()=>{
    

    // const [count,setCount]=useState(0);
     
  function sss(){
     let arr=[1,2,3,4];
     let filterarr=arr.filter(element=>{return element%2===0})
     console.log(filterarr,'filterarray');
    }
 // WHEN THEIR IS UPDATE IN STATE RERENDERS HAPPENS AND WHEN REREMNDER HAPPENS THE useEffect WILL RAN
  useEffect(  ()=>{
    console.log("useffect ran")
  })


    return(
      <div>
          <button onClick={sss}>inc count</button>
      </div>


    )
    
}
export default Example;