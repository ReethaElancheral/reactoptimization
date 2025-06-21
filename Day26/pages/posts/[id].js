export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
    ],
    fallback: 'blocking', 
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

  if (!res.ok) {
    return { notFound: true };
  }

  const data = await res.json();

  return { props: { data }, revalidate: 10 }; 
}

export default function PostPage({ data }) {
  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h1>Dynamic SSG Post {data.id}</h1>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
}
