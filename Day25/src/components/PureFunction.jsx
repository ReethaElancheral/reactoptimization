import React, { useState } from 'react';


function PureCounter({ count }) {
  return <h2>Count: {count}</h2>;
}


const MemoizedCounter = React.memo(PureCounter);

export default function PureFunction() {
  const [count, setCount] = useState(0);

  return (
    <div>
    
      <MemoizedCounter count={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
