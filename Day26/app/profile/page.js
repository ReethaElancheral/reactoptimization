
import React from 'react';

export const metadata = {
  title: 'User Profile',
  description: 'User profile page with server-side rendering',
};


async function fetchUser() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1', {
    cache: 'no-store', 
  });

  if (!res.ok) {
    throw new Error('Failed to fetch user data');
  }

  return res.json();
}

export default async function ProfilePage() {
  const user = await fetchUser();

  return (
    <main style={{ padding: '2rem' }}>
      <h1>User Profile</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> <a href={`https://${user.website}`} target="_blank" rel="noreferrer">{user.website}</a></p>
    </main>
  );
}
