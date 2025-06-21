import React, { useState, useMemo } from 'react';

function ExpensiveComponent() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  const expensiveCalculation = (num) => {
    console.log('Calculating...');
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += num * Math.random();
    }
    return result.toFixed(2);
  };


  const calculatedValue = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h2> Calculation Result: {calculatedValue}</h2>
      <button onClick={() => setCount(count + 1)}>Recalculate</button>
      <br /><br />
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Type here"
      />
    </div>
  );
}

export default ExpensiveComponent;
