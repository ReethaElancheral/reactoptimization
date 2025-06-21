import Head from 'next/head';

export async function getStaticPaths() {
  const res = await fetch('https://fakestoreapi.com/products?limit=5');
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return {
    paths,
    fallback: false, 
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await res.json();

  return {
    props: { product },
  };
}

export default function ProductDetail({ product }) {
  return (
    <div style={{ padding: '2rem' }}>
      <Head>
        <title>{product.title}</title>
        <meta name="description" content={product.description} />
      </Head>

      <h1>{product.title}</h1>
      <p><strong>Price:</strong> ₹{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}
