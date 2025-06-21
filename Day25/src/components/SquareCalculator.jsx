import  { useState, useMemo } from 'react';

function SquareCalculator() {
  const [num, setNum] = useState(0);
  const [text, setText] = useState('');


  const square = useMemo(() => {
    console.log('Recalculating square...');
    return num * num;
  }, [num]);

  return (
    <div>
      <h2>Square of {num}: {square}</h2>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(parseInt(e.target.value || 0))}
        placeholder="Enter number"
      />
      <br /><br />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type anything..."
      />
    </div>
  );
}

export default SquareCalculator;
