

import { notFound } from 'next/navigation';


const products = [
  { id: '1', name: 'Product One', description: 'First product description' },
  { id: '2', name: 'Product Two', description: 'Second product description' },
  { id: '3', name: 'Product Three', description: 'Third product description' },
];


export async function generateStaticParams() {
  return products.map(product => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }) {
  const product = products.find(p => p.id === params.id);
  if (!product) return { title: 'Product Not Found' };
  return {
    title: product.name,
    description: product.description,
  };
}

export default function ProductPage({ params }) {
  const product = products.find(p => p.id === params.id);
  if (!product) {
    notFound();
  }
  
  return (
    <main style={{ padding: '2rem' }}>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </main>
  );
}
