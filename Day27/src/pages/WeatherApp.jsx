import  { lazy, Suspense } from 'react';

const CurrentWeather = lazy(() => import('../components/weather/CurrentWeather'));
const Forecast = lazy(() => import('../components/weather/Forecast'));

export default function WeatherApp() {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>Weather App</h1>

      <Suspense fallback={<p>Loading current weather...</p>}>
        <CurrentWeather />
      </Suspense>

      <Suspense fallback={<p>Loading forecast...</p>}>
        <Forecast />
      </Suspense>
    </div>
  );
}
