import Link from 'next/link';
import Head from 'next/head';

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  const news = await res.json();

  return {
    props: { news },
    revalidate: 60, 
  };
}

export default function NewsHome({ news }) {
  return (
    <div style={{ padding: '2rem' }}>
      <Head>
        <title>Top News - SSG</title>
        <meta name="description" content="Top headlines updated with static generation" />
      </Head>

      <h1>📰 Top News (Static Generation)</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {news.map((article) => (
          <li key={article.id} style={{ marginBottom: '1.5rem' }}>
            <h2>{article.title}</h2>
            <Link href={`/news/${article.id}`}>Read Full Article</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
