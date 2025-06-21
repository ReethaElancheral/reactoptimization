export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/2');
  const data = await res.json();

  return { props: { data } };
}

export default function SSGPage({ data }) {
  return (
    <div>
      <h1>SSG Example (getStaticProps)</h1>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
}
