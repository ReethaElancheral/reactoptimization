import React, { useEffect, useState } from 'react';

export default function Suggestions({ excludeId }) {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=4')
      .then(res => res.json())
      .then(data => setSuggestions(data.filter(p => p.id !== excludeId)));
  }, [excludeId]);

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3>Suggested Products</h3>
      <div style={{ display: 'flex', gap: '20px' }}>
        {suggestions.map(p => (
          <div key={p.id}>
            <img src={p.image} alt={p.title} width="100" />
            <p>{p.title}</p>
            <p>₹{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
