import React, { lazy, Suspense } from 'react';

const ImageChunk1 = lazy(() => import('../components/imagegallery/ImageChunk1'));
const ImageChunk2 = lazy(() => import('../components/imagegallery/ImageChunk2'));
const ImageChunk3 = lazy(() => import('../components/imagegallery/ImageChunk3'));

export default function ImageGallery() {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>Lazy Loaded Image Gallery</h1>

      <Suspense fallback={<p>Loading Chunk 1...</p>}>
        <ImageChunk1/>
      </Suspense>

      <Suspense fallback={<p>Loading Chunk 2...</p>}>
        <ImageChunk2 />
      </Suspense>

      <Suspense fallback={<p>Loading Chunk 3...</p>}>
        <ImageChunk3 />
      </Suspense>
    </div>
  );
}
