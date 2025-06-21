import Link from "next/link";
import Task1Intro from "./Task1Intro";

export default function HomePage() {
  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "auto" }}>
      <section>
        <Task1Intro />
        <hr />
      </section>

      <section>
        <h2>4. Basic Page Creation</h2>
        <Link href="/basic">Basic Page</Link>
      </section> <hr />

  <section>
        <h2>5. SSR Example</h2>
        <Link href="/ssr">SSR Page (getServerSideProps)</Link>
      </section><hr/>

<section>
        <h2>6. SSG Example</h2>
        <Link href="/ssg">SSG Page (getStaticProps)</Link>
      </section><hr />

      <section>
        <h2>7 & 10. Dynamic SSG Pages with fallback</h2>
        <ul>
          <li><Link href="/posts/1">Post 1</Link></li>
          <li><Link href="/posts/2">Post 2</Link></li>
          <li><Link href="/posts/3">Post 3</Link></li>
          <li><Link href="/posts/4">Post 4 (not pre-generated, fallback)</Link></li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>8. Compare SSR vs SSG</h2>
        <ul>
          <li><Link href="/compare-ssr">SSR Compare Page</Link></li>
          <li><Link href="/compare-ssg">SSG Compare Page</Link></li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>9. SEO Benefits</h2>
        <Link href="/seo">SEO Example Page</Link>
      </section>

      <hr />

      <section>
        <h2>11. Revalidate Pages (ISR)</h2>
        <Link href="/revalidate">ISR Revalidate Page</Link>
      </section>

      <hr />

      <section>
        <h2>12. Client-Side Navigation</h2>
        <Link href="/navigation">Navigation Example</Link>
      </section>
<hr/>
<section>
  <h2>13. Error Handling</h2>
  <Link href="/error-handling">Custom API Error Handling</Link>
</section>
<hr/>

<section>
  <h2>Mini Project 1.Blog Listing (SSR)</h2>
  <Link href="/blog">View Blog Posts</Link>
</section>
<hr/>

<section>
  <h2>Product Catalog with SSG</h2>
  <Link href="/products">View Product Catalog</Link>
</section>
<hr/>

<section>
  <h2>User Profile (SSR)</h2>
  <Link href="/users/1">View User 1 Profile</Link>
</section>
<hr/>

<section>
  <h2>Mini Project 4: News Website</h2>
  <Link href="/news">Visit News Home (SSG)</Link>
</section>






    </main>
  );
}
