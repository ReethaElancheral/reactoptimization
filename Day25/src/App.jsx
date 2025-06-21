import { useState } from "react";
import "./App.css";
import FilterList from "./components/FilterList";
import CounterApp from "./components/CouterApp";
import SearchSuggestionApp from "./components/SearchSuggestionApp";
import ExpensiveCalculationApp from "./components/ExpensiveCalculationApp";
import Greeting from "./components/Greeting";
import ExpensiveComponent from "./components/ExpensiveComponent";
import SquareCalculator from "./components/SquareCalculator";
import NewCounter from "./components/NewCounter";
import WelcomeApp from "./components/WelcomeApp";
import CallBack from "./components/CallBack";
import PureFunction from "./components/PureFunction";
import CombineAll from "./components/CombineAll";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>
        1. Introduction to Performance Optimization: Write a short explanation
        of why performance optimization is important in React applications.{" "}
      </h2>
      <p>
        Performance optimization is crucial in React applications because it
        ensures a smooth and responsive user experience, especially in large or
        complex apps. Without optimization, frequent or unnecessary re-renders
        can slow down the UI, increase load times, and cause lag during
        interactions. By applying techniques like memoization, code splitting,
        and lazy loading, developers can reduce computational overhead, improve
        app speed, and enhance overall usability—leading to better user
        satisfaction and lower resource usage.
      </p>
      <hr />
      <h2>
        4. React.memo Basic Usage: Wrap a functional component with React.memo
        to prevent re-renders.
      </h2>
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>

        <Greeting name="Reetha" />
      </div>
      <hr/>
      <h2>6. useMemo Basic Example: Cache the result of an expensive computation 
using useMemo. .</h2>
<ExpensiveComponent/>
<hr/>
<h2>7. useMemo with Dependency Array: Control when useMemo recalculates its 
value using dependencies. </h2>
<SquareCalculator/><hr/>
<h2>8. useCallback Basic Example: Use useCallback to memoize event handlers. </h2>
<NewCounter/><hr/>
<h2>9. useCallback with Dependencies: Demonstrate how useCallback updates 
memoized functions when dependencies change. </h2>
<WelcomeApp/>
<hr/>
<h2>10. Avoid Inline Functions: Refactor inline functions using useCallback. </h2>
<CallBack/>
<hr/>
<h2>12. Optimization with Pure Functions: Refactor components to use pure 
functions where possible.</h2>

<PureFunction/>
<hr/>
<h2>13. Prevent Unnecessary Re-renders: Combine React.memo, useMemo, and 
useCallback for maximum optimization. </h2>
<CombineAll/>



      <FilterList />
      <CounterApp />
      <SearchSuggestionApp />
      <ExpensiveCalculationApp />
    </>
  );
}

export default App;
