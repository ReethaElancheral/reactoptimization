
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const article = await fetchArticle(params.id);
  if (!article) return { title: 'Article Not Found' };
  return {
    title: article.title,
    description: article.description || '',
  };
}

async function fetchArticle(id) {
  const YOUR_API_KEY = 'c2231c16f4f04a89905a75faf1439f45';

  try {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${YOUR_API_KEY}`, { cache: 'no-store' });
    if (!res.ok) {
      console.error('API error:', res.status, res.statusText);
      return null;
    }
    const data = await res.json();
    return data.articles.find(article => encodeURIComponent(article.title) === id) || null;
  } catch (error) {
    console.error('Fetch failed:', error);
    return null;
  }
}

export default async function ArticlePage({ params }) {
  const article = await fetchArticle(params.id);

  if (!article) {
    notFound();
  }

  return (
    <main style={{ padding: '2rem' }}>
      <h1>{article.title}</h1>
      <p><em>{article.publishedAt}</em></p>
      <p>{article.content || article.description}</p>
      <a href={article.url} target="_blank" rel="noreferrer">Read full article</a>
    </main>
  );
}
