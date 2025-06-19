import React, {useState,useMemo} from 'react';

const SuggestionList = React.memo(({suggestions})=>{
    console.log('Suggestion list rendered');
  return (
    <ul style={{ paddingLeft: '20px' }}>
      {suggestions.map((item, index) => (
        <li key={index} style={{ fontSize: "16px", marginBottom: "5px" }}>
          {item}
        </li>
      ))}
    </ul>
  );
});

export default function SearchSuggestionApp() {
  const [searchTerm, setSearchTerm] = useState("");

  const data = [
    "Apple",
    "Banana",
    "Grapes",
    "Orange",
    "Strawberry",
    "Watermelon",
    "Mango",
    "Blueberry",
    "Pineapple",
    "Peach",
    "Papaya",
  ];

 
  const filteredSuggestions = useMemo(() => {
    console.log("Filtering...");
    return data.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h2>3. Search Suggestion App</h2>
      <input
        type="text"
        placeholder="Search fruits..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          fontSize: "16px",
          marginBottom: "20px",
        }}
      />

      <SuggestionList suggestions={filteredSuggestions} />
    </div>
  );
}
