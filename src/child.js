import React, { useContext } from 'react'
import CounterContext from './counterContext';
import counterContext from './counterContext';


const Child= ()=>{
    const counterValue=useContext(counterContext)
    console.log(counterValue)
    return(
        <div>
            <h1>thi is Child : {counterValue[0]}</h1>
            <button onClick={()=> {counterValue[1](++counterValue[0])}}>Increment</button>
        </div>
        
    )
}
export default Child