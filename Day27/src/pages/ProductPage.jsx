import  { lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = lazy(() => import('../components/ecommerce/ProductDetails'));
const Reviews = lazy(() => import('../components/ecommerce/Reviews'));
const Suggestions = lazy(() => import('../components/ecommerce/Suggestions'));

export default function ProductPage() {
  const { id } = useParams(); 

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Product Page</h1>

      <Suspense fallback={<p>Loading product details...</p>}>
        <ProductDetails id={id} />
      </Suspense>

      <Suspense fallback={<p>Loading reviews...</p>}>
        <Reviews productId={id} />
      </Suspense>

      <Suspense fallback={<p>Loading suggestions...</p>}>
        <Suggestions excludeId={parseInt(id)} />
      </Suspense>
    </div>
  );
}
