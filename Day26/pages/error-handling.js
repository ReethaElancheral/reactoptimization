export async function getServerSideProps() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/invalid-endpoint');
    
    if (!res.ok) {
      throw new Error('API failed');
    }

    const data = await res.json();
    return { props: { data } };
  } catch (error) {
    return {
      props: {
        error: 'Failed to fetch data. Please try again later.',
      },
    };
  }
}

export default function ErrorHandlingPage({ data, error }) {
  if (error) {
    return (
      <div>
        <h1>Custom Error Display</h1>
        <p style={{ color: 'red' }}>{error}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Data Loaded</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
