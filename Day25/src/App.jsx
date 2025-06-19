import { useState } from 'react'
import './App.css'
import FilterList from './components/FilterList'
import CounterApp from './components/CouterApp'
import SearchSuggestionApp from './components/SearchSuggestionApp'
import ExpensiveCalculationApp from './components/ExpensiveCalculationApp'

function App() {
  

  return (
    <>
      <FilterList/>
      <CounterApp/>
      <SearchSuggestionApp/>
      <ExpensiveCalculationApp/>
    </>
  )
}

export default App
