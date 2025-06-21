import React, { useState, useCallback } from 'react';

const Button = React.memo(({ onClick }) => {
  console.log('✅ Button Rendered');
  return <button onClick={onClick}>Click Me</button>;
});

export default function CallBack() {
  const [count, setCount] = useState(0);


  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <Button onClick={handleClick} />
    </div>
  );
}
