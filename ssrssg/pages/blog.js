import Head from 'next/head';

export async function getServerSideProps() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    if (!res.ok) throw new Error('Failed to fetch');

    const posts = await res.json();
    return { props: { posts } };
  } catch (error) {
    return {
      props: {
        posts: [],
        error: 'Failed to fetch blog posts.',
      },
    };
  }
}

export default function BlogPage({ posts, error }) {
  return (
    <div style={{ padding: '2rem' }}>
      <Head>
        <title>Latest Blog Posts</title>
        <meta name="description" content="Read the latest blog articles fetched with SSR in Next.js" />
      </Head>

      <h1>Latest Blog Posts (SSR)</h1>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: '2rem' }}>
            <h2 style={{ marginBottom: '0.5rem' }}>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
