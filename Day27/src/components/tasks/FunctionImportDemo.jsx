import React from "react";

export default function FunctionImportDemo() {
  const handleClick = async () => {
    try {
      const module = await import("../utils/dateUtils"); 
      console.log("Imported module:", module);

      if (!module.formatDate) throw new Error("formatDate not found");

      const formatted = module.formatDate(new Date());
      alert(`Formatted date: ${formatted}`);
    } catch (err) {
      console.error("Dynamic import error:", err);
    }
  };

  return (
    <div>
      <h3>Code Splitting with Functions</h3>
      <button onClick={handleClick}>Format Current Date</button>
    </div>
  );
}
