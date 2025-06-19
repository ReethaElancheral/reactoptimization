

export const metadata = {
  title: 'Blog Listing | My Blog',
  description: 'Latest articles and blogs on tech, dev, and more',
};

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Latest Blog Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id} style={{ marginBottom: '1.5rem' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
