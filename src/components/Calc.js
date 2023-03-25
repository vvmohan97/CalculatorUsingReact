import { useState } from 'react';
import { Button } from './Button';
import './Calc.css'
import * as math from 'mathjs'

import { Input } from './Input';

export function Calc(){
    const [text,setText]=useState("");
    const [result,setResult]=useState("")

const addToText =(val)=>{
    setText((text)=>[...text,val+""])
}
const calculateResult=()=>{
        const input = text.join("");
    setResult(math.evaluate(input))
}
const resetInput=()=>{
    setResult("")
    setText("")
}

    return(
        <div className='main-div'>
            <div className='calc-wrapper'>
                <Input text={text} result={result}/> 
        <div className='row'>
            <Button symbol="7" handleClick={addToText}/>
            <Button symbol="8" handleClick={addToText}/>
            <Button symbol="9" handleClick={addToText}/>
            <Button symbol="/" color="#f2a33c" handleClick={addToText}/>
        </div>
        <div className='row'>
            <Button symbol="4" handleClick={addToText}/>
              <Button symbol={5} handleClick={addToText}/>
              <Button symbol={6} handleClick={addToText}/>
              <Button symbol={"*"} color="#f2a33c" handleClick={addToText}/>
        </div>
        <div className='row'>
            <Button symbol={1}handleClick={addToText}/>
              <Button symbol={2}handleClick={addToText}/>
              <Button symbol={3} handleClick={addToText}/>
              <Button symbol={'-'} color="#f2a33c" handleClick={addToText}/>
        </div>
        <div className='row'>
            <Button symbol={0} handleClick={addToText}/>
              <Button symbol={'.'} handleClick={addToText}/>
              <Button symbol={'='} color="#f2a33c" handleClick={calculateResult}/>
              <Button symbol={'+'} color='#f2a33c' handleClick={addToText}/>
        </div>
        <Button symbol={'clear'} handleClick={resetInput} color='red'/>
        
            </div>

            
        </div>
        
        

    );
}