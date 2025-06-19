import  { useState, useMemo } from 'react';

const items = [
  'Apple',
  'Banana',
  'Grapes',
  'Orange',
  'Strawberry',
  'Pineapple',
  'Watermelon',
  'Mango',
  'Blueberry',
  'Kiwi',
];

export default function FilterList() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = useMemo(() => {
    console.log('Filtering items...');
    return items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>1. Fruit List Filter</h2>
      <input
        type="text"
        placeholder="Search fruits..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '8px', marginBottom: '15px', width: '250px' }}
      />

      <ul>
        {filteredItems.map((item, index) => (
          <li key={index} style={{ fontSize: '18px' }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
