

import './App.css'


import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WordDetails from "./components/WordDetails";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const lookup = (query) => {
    setLoading(true);
    setError("");
    setData(null);
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`)
      .then((res) => {
        if (!res.ok) throw new Error("Word not found");
        return res.json();
      })
      .then((resData) => {
        setData(resData[0]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <div className="container">
      <h1>📖 Dictionary App</h1>
      <SearchBar onSearch={lookup} />
      {loading && <p className="info">Loading definition...</p>}
      {error && <p className="error">{error}</p>}
      {data && <WordDetails wordData={data} />}
    </div>
  );
}
