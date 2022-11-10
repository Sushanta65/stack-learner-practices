import React, {useState} from "react";
import InputField from "./InputField";
import Operation from "./Operation";

    const initialState = {
        a: 0,
        b: 0
    }

    const histories = [
        {
            
        }
    ]

const Calculator = () => {
    const [inputState, setInputState] = useState(initialState)
    const [result, setResult] = useState(0)

    const handleChange = (e) => {
        setInputState({
            ...inputState,
            [e.target.name]: e.target.value
        })
    }

    const handleOperation = (operator) => {
       if(inputState.b > 0 && inputState.a > 0){
        setResult(eval(`${inputState.a} ${operator} ${inputState.b}`))
       }else{
        alert('Please Type a Number')
       }
    }
  return (
    <div>
      <h3>Result: {result}</h3>
      <div>
        <InputField name="a" onChange={handleChange} value={inputState.a} type="number" placeholder="Type a Number" />
        <InputField name="b" onChange={handleChange} value={inputState.b} type="number" placeholder="Type a Number" />
      </div>
      <Operation operator="+" handleOperation={handleOperation}/>
      <Operation operator="-" handleOperation={handleOperation}/>
      <Operation operator="*" handleOperation={handleOperation}/>
      <Operation operator="/" handleOperation={handleOperation}/>
    </div>
  );
};

export default Calculator;
