import React, { useState, useCallback } from 'react';


const IncrementButton = React.memo(({ onIncrement }) => {
  console.log('🔁 IncrementButton Rendered');
  return <button onClick={onIncrement}>Increment</button>;
});

export default function NewCounter() {
  const [count, setCount] = useState(0);


  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []); 

  return (
    <div>
      <h2>Count: {count}</h2>
      <IncrementButton onIncrement={increment} />
    </div>
  );
}
