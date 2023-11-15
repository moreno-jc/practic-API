'use client'
import React, { useState, useEffect } from 'react';



export default function Test(){
    
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const loop = () => {
        console.log("Tick... Tack...");
        requestAnimationFrame(loop);
      }

    

    useEffect (() => {
       
        requestAnimationFrame(loop);
        
        
       }, [])

    useEffect(() => {
        
        counter1 >10 ? alert('hello'): console.log('useEffect []');
        
    }, [counter1, counter2])

   useEffect (() => {
    
   }, [counter2])
   
    
    return (
        <div>
            
            <h1>Clicks c1: {counter1}</h1>
            <h1>Clicks c2: {counter2}</h1>
            <button onClick={() => setCounter1(counter1+1)}>
                Increment c1
            </button>
            <button className='bg-sky-200 ' onClick={() => setCounter2(counter2+1)}>
                Increment c2
            </button>
        </div>
    )
}

