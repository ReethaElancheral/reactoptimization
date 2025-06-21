import Head from 'next/head';

export default function SEOPage() {
  return (
    <>
      <Head>
        <title>SEO Example Page</title>
        <meta name="description" content="This page demonstrates SEO benefits using Next.js Head component" />
      </Head>
      <div>
        <h1>SEO Benefits with Next.js</h1>
        <p>This page has meta tags for SEO inside the &lt;Head&gt; component.</p>
      </div>
    </>
  );
}
