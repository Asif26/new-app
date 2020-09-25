import React, { useContext } from 'react';
import counterContext from './counterContext';



const Child = (propes)=>{
    const counterValue=useContext(counterContext)
    console.log(counterValue)

    return(
        <div>
            <h1>This is My Name : {propes.name}</h1>
        </div>
    )


}
export default Child