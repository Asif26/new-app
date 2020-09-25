import React from 'react';
import Parent from './Parent'
import counterContext from './counterContext';



function App(){
  return(
    <counterContext.Provider value={35}>
    <div>
    <Parent name='AsifBashir khuharo'/>
    </div>
    </counterContext.Provider>
  )
}
export default App;