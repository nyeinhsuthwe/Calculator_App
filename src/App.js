/* eslint-disable no-eval */
/* eslint-disable eqeqeq */

import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Output from './components/Output';
import { useState } from 'react';

function App() {
  const[output,outputset]=useState(0);
  const[input,inputset]=useState(0);

  function click(value){

    if(  value == 'AC'){
      inputset(0);
      outputset(0);
    }
    else if( value == '='){
      outputset(eval(input));
      inputset(0);
    }
    else if( value == 'Back'){
      if(input != 0){
        input.length ==1? inputset(0) : inputset(input.slice(0, input.length-1));
      }
    }
    else{
      input == 0 ? inputset(value) : inputset( input + value);
    }
   }
  return (
    <div className="container">
      <div className='calculator-frame'>
      
      <Output output={output}/>
      <Input input={input}/>
      <Button click={click}/>
      </div>
    </div>
  );
}


export default App;
