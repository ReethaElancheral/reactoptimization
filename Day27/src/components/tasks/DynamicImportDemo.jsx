import React from "react";

export default function DynamicImportDemo() {
  const handleCalculate = async () => {
    try {
      const module = await import("../utils/mathUtils");
      console.log("Imported module:", module);

      if (!module.calculateSum) throw new Error("calculateSum not found");

      const result = module.calculateSum(10, 20);
      alert(`The sum is ${result}`);
    } catch (err) {
      console.error("Import or execution error:", err);
    }
  };

  return (
    <div>
      <h3>Dynamic Import Demo</h3>
      <button onClick={handleCalculate}>Calculate Sum</button>
    </div>
  );
}
