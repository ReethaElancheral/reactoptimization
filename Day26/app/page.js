
export const metadata = {
  title: 'Top News',
  description: 'Latest top news articles',
};


async function getTopNews() {
      const YOUR_API_KEY = 'c2231c16f4f04a89905a75faf1439f45';
  const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${YOUR_API_KEY}`);
  if (!res.ok) throw new Error('Failed to fetch top news');
  const data = await res.json();
  return data.articles;
}

export default async function HomePage() {
  const articles = await getTopNews();

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Top News</h1>
      <ul>
        {articles.map((article, idx) => (
          <li key={idx} style={{ marginBottom: '1rem' }}>
            <a href={`/articles/${encodeURIComponent(article.title)}`} style={{ color: 'blue', textDecoration: 'underline' }}>
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
