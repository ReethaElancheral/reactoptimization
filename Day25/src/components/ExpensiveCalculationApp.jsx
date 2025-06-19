import { useState, useMemo } from "react";


const expensiveFactorial = (n) => {
  console.log("Running expensive calculation...");
  let result = 1;
  for (let i = 1; i <= n; i++) {
   
    for (let j = 0; j < 100000000; j++) {}
    result *= i;
  }
  return result;
};

export default function ExpensiveCalculationApp() {
  const [number, setNumber] = useState(1);
  const [name, setName] = useState("");

  
  const factorial = useMemo(() => expensiveFactorial(number), [number]);

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h2>4. Expensive Calculation App</h2>

      <div style={{ marginBottom: "15px" }}>
        <label>
          Enter a number:{" "}
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value))}
            style={{ padding: "8px", width: "60px" }}
          />
        </label>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>
          Type your name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ padding: "8px", width: "200px" }}
          />
        </label>
      </div>

      <h3>Factorial of {number}: {factorial}</h3>
    </div>
  );
}
