import React, { useState, useCallback } from 'react';


const IncrementButton = React.memo(({ onIncrement }) => {
  console.log(' IncrementButton Rendered');
  return (
    <button onClick={onIncrement} style={{ padding: '10px 20px', fontSize: '16px' }}>
      Increment
    </button>
  );
});

export default function CounterApp() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial' }}>
        <h2>2.Counter App</h2>
      <h2>Count: {count}</h2>
      
    
      <IncrementButton onIncrement={increment} />

      <br /><br />

      <input
        type="text"
        placeholder="Type your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: '8px', fontSize: '16px' }}
      />
    </div>
  );
}
