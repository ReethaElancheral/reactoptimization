export async function getServerSideProps() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');

    console.log('Response status:', res.status); 

    if (!res.ok) {
      throw new Error('Failed to fetch post');
    }

    const data = await res.json();
    console.log('Fetched data:', data); 

    return {
      props: { data },
    };
  } catch (error) {
    console.error('Fetch error:', error.message);
    return {
      props: {
        data: null,
        error: error.message,
      },
    };
  }
}

export default function SSRPage({ data, error }) {
  if (error) return <p>❌ Error: {error}</p>;
  if (!data) return <p>❌ No data found</p>;

  return (
    <div>
      <h1>✅ SSR Page</h1>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
}
