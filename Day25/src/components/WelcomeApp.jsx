import React, { useState, useCallback } from 'react';


const Greeting = React.memo(({ onGreet }) => {
  console.log('🔁 Greeting Rendered');
  return <button onClick={onGreet}>Say Hello</button>;
});

export default function WelcomeApp() {
  const [name, setName] = useState('Reetha');
  const [count, setCount] = useState(0);

  
  const greet = useCallback(() => {
    alert(`Hello, ${name}!`);
  }, [name]); 

  return (
    <div>
      <Greeting onGreet={greet} />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <br /><br />
      <button onClick={() => setCount(count + 1)}>Unrelated Counter: {count}</button>
    </div>
  );
}
