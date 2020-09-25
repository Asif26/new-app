import React, { useState } from 'react';
import Parent from './Parent'
import counterContext from './counterContext';



function App(){
  let setCount=useState(25)
  return(
    <counterContext.Provider value={setCount}>
    <div>
    <Parent name='AsifBashir khuharo'/>
    </div>
    </counterContext.Provider>
  )
}
export default App;