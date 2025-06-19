import  { useEffect, useState } from 'react';

export default function ProductDetails({ id }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(setProduct);
  }, [id]);

  if (!product) return <p>Loading product...</p>;

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <img src={product.image} alt={product.title} width="150" />
      <div>
        <h2>{product.title}</h2>
        <p><strong>₹{product.price}</strong></p>
        <p>{product.description}</p>
      </div>
    </div>
  );
}
