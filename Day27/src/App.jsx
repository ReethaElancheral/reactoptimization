import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';



const Dashboard = lazy(() => import('./pages/Dashboard'));
const ImageGallery = lazy(() => import('./pages/ImageGallery'));
const WeatherApp= lazy(() => import('./pages/WeatherApp'));
const ProductPage = lazy(() => import('./pages/ProductPage'));
const ProductsList = lazy(() => import('./pages/ProductsList'));


function App() {
  return (
    <Router>
      <Navbar/>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
           <Route path="/" element={<HomePage/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/gallery" element={<ImageGallery/>} />
          <Route path="/weather" element={<WeatherApp/>} />
     <Route path="/product" element={<ProductsList />} />
<Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
