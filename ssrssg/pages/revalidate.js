export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/4');
  const data = await res.json();

  return {
    props: { data },
    revalidate: 10, 
  };
}

export default function RevalidatePage({ data }) {
  return (
    <div>
      <h1>Incremental Static Regeneration (ISR)</h1>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
}
