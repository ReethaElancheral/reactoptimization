import Link from 'next/link';

export default function NavigationExample() {
  return (
    <div>
      <h1>Client-Side Navigation Example</h1>
      <nav>
        <ul>
          <li><Link href="/ssr">Go to SSR Page</Link></li>
          <li><Link href="/ssg">Go to SSG Page</Link></li>
          <li><Link href="/basic">Go to Basic Page</Link></li>
        </ul>
      </nav>
    </div>
  );
}
