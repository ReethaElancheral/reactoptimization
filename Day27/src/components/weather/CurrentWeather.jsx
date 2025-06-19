import React, { useEffect, useState } from 'react';

const API_KEY = "6b8475d1939bb5502208fc73e60459e5";
const CITY = 'Doha';

export default function CurrentWeather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      setWeather(data);
    }
    fetchWeather();
  }, []);

  if (!weather) return <p>Loading current weather...</p>;

  return (
    <div style={{ background: '#eef', padding: '1rem', borderRadius: '8px' }}>
      <h2>Current Weather in {weather.name}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Condition: {weather.weather[0].main}</p>
      <p>Wind: {weather.wind.speed} m/s</p>
    </div>
  );
}
