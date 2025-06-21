export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/3');
  const data = await res.json();

  return { props: { data }, revalidate: 10 };
}

export default function CompareSSG({ data }) {
  return (
    <div>
      <h1>Compare SSG Page</h1>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
}
