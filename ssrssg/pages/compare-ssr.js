export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/3');
  const data = await res.json();

  return { props: { data } };
}

export default function CompareSSR({ data }) {
  return (
    <div>
      <h1>Compare SSR Page</h1>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
}
