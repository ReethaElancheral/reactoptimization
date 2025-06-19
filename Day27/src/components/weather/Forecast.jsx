import React, { useEffect, useState } from 'react';

const API_KEY = "6b8475d1939bb5502208fc73e60459e5";
const CITY = 'Doha';

export default function Forecast() {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    async function fetchForecast() {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      setForecast(data.list.filter((_, i) => i % 8 === 0)); 
    }
    fetchForecast();
  }, []);

  if (!forecast) return <p>Loading forecast...</p>;

  return (
    <div style={{ background: '#def', padding: '1rem', borderRadius: '8px', marginTop: '1rem' }}>
      <h2>5-Day Forecast</h2>
      <ul>
        {forecast.map((item, idx) => (
          <li key={idx}>
            {new Date(item.dt_txt).toLocaleDateString()}: {item.main.temp}°C, {item.weather[0].main}
          </li>
        ))}
      </ul>
    </div>
  );
}
