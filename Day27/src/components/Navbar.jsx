import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '1rem', background: '#333', color: '#fff' }}>
         <Link to="/" style={{ color: 'white' }}>Home</Link>
      <Link to="/dashboard" style={{ color: 'white' }}>Dashboard</Link>
      <Link to="/gallery" style={{ color: 'white' }}>Image Gallery</Link>
      <Link to="/weather" style={{ color: 'white' }}>Weather App</Link>
      <Link to="/product">E-Commerce</Link>
    </nav>
  );
}
