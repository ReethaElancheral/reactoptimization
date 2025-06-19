

export default function Reviews({ productId }) {
  const dummyReviews = [
    { user: 'Alice', comment: 'Excellent product!' },
    { user: 'Bob', comment: 'Worth every penny.' },
    { user: 'Charlie', comment: 'Arrived on time and as described.' }
  ];

  return (
    <div style={{ marginTop: '1rem' }}>
      <h3>Customer Reviews</h3>
      <ul>
        {dummyReviews.map((r, i) => (
          <li key={i}><strong>{r.user}</strong>: {r.comment}</li>
        ))}
      </ul>
    </div>
  );
}
