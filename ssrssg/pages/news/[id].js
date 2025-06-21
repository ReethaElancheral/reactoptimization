import Head from 'next/head';

export async function getServerSideProps({ params }) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

    if (!res.ok) {
      return { notFound: true };
    }

    const article = await res.json();
    return {
      props: { article },
    };
  } catch (err) {
    return { notFound: true };
  }
}

export default function NewsArticle({ article }) {
  return (
    <div style={{ padding: '2rem' }}>
      <Head>
        <title>{article.title}</title>
        <meta name="description" content={article.body.slice(0, 150)} />
      </Head>

      <h1>{article.title}</h1>
      <p>{article.body}</p>
    </div>
  );
}
