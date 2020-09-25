import React from 'react';
import Child from './child'



const Parent =(props)=>{

    return(
        <Child name={props.name}/>
     )
}
export default Parent;