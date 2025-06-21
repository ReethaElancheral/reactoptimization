import React, { useState, useMemo, useCallback } from 'react';

const CounterDisplay = React.memo(({ count, onIncrement }) => {
  console.log('🔁 CounterDisplay rendered');

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
});

export default function CombineAll() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const factorial = useMemo(() => {
    console.log('Calculating factorial...');
    const fact = (n) => (n <= 1 ? 1 : n * fact(n - 1));
    return fact(count);
  }, [count]);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <div>
      <CounterDisplay count={count} onIncrement={increment} />

      <p>Factorial of {count} is: {factorial}</p>

      <input
        placeholder="Type something"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
