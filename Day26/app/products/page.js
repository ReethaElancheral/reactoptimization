
export const metadata = {
  title: 'Product Catalog',
  description: 'Browse our amazing products',
};


const products = [
  { id: '1', name: 'Product One', description: 'First product description' },
  { id: '2', name: 'Product Two', description: 'Second product description' },
  { id: '3', name: 'Product Three', description: 'Third product description' },
];

export default function ProductsPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Product Catalog</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: '1rem' }}>
            <a href={`/products/${product.id}`} style={{ color: 'blue', textDecoration: 'underline' }}>
              {product.name}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
