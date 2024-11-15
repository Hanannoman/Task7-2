import { useEffect, useState } from "react";


export default function Count() {
    const[index,setIndex]=useState(0);
    const[bool,setBool
    ]=useState(false);
    const[disHello ,setDisHello]=useState(false);
    const[dis2,setDis2]=useState('');
    const Add=()=>{
     
      if(!bool){
        if(index<10){
          setIndex(index+1);
      }
      else if(index<100){
          setIndex(index+10);
          
      }
      else if(index<1000){
          setIndex(index+100)
      }
      else if(index==1000 && !bool){
        setBool(true)
      }
      }

    };
    // const Add1=()=>{
      
    //   if(index<10){
    //     setIndex(index+1);
    // }
    // else if(index<100 
    // ){
    //     setIndex(index+10);
        
    // }
    // else if(index<1000){
    //     setIndex(index+100)
    // }
    // else if(index==1000 && !bool){
    //   setBool(true)
    // }

    // };
    const Decrease=()=>{
      
        if(index>1000){
          setIndex(index-100);
      }
      else if(index>100){
          setIndex(index-10);
         
      }
      else if(index>0){
          setIndex(index-1)
      }
      else if(index==0){
        setBool(false);
      }

    };
    useEffect(()=>{
      setDisHello(true);
      setDis2('Welcome')
    })
    useEffect(()=>{
      if(index==10 || index==100|| index==1000){
        setDisHello(true);
        setDis2('you are reaching 10 or on of a multiple of it');

      }
    })
    const theClose=()=>{
      setDisHello(false);
      
    }
  return (
    <div>
      <p>{index}</p>
      {
        !bool &&(
          <button onClick={Add}> add</button>
        )
      }
      {
        bool&&(
          <button onClick={Decrease}>decr</button>
        )
      }
    
      {disHello &&(
      <div>
        <p>{dis2}</p>
        <button onClick={theClose}> Close</button>
        </div>
      )}
    </div>
  )}

