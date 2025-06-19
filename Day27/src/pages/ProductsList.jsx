import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=6')
      .then(res => res.json())
      .then(setProducts);
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Products</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.map(product => (
          <div key={product.id} style={{ width: '200px', border: '1px solid #ccc', padding: '10px' }}>
            <img src={product.image} alt={product.title} width="100%" />
            <h4>{product.title.slice(0, 20)}</h4>
            <p>₹{product.price}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
