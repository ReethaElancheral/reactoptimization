import Head from 'next/head';

export async function getServerSideProps({ params }) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    
    if (!res.ok) {
      return { notFound: true }; 
    }

    const user = await res.json();
    return {
      props: { user },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default function UserProfile({ user }) {
  return (
    <div style={{ padding: '2rem' }}>
      <Head>
        <title>{user.name} - Profile</title>
        <meta name="description" content={`Profile page of ${user.name}`} />
      </Head>

      <h1>User Profile</h1>
      <h2>{user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
    </div>
  );
}
