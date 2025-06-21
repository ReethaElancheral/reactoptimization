import Link from 'next/link';

export async function getStaticProps() {
  const res = await fetch('https://fakestoreapi.com/products?limit=5');
  const products = await res.json();

  return {
    props: { products },
  };
}

export default function ProductCatalog({ products }) {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Product Catalog (SSG)</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: '1.5rem' }}>
            <h2>{product.title}</h2>
            <p>₹{product.price}</p>
            <Link href={`/products/${product.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
