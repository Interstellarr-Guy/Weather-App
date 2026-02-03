import { useState } from "react";
import { getWeatherByCity } from "./api/weather";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  
  console.log("City:", city);

  const handleSearch = async () => {
    if (!city.trim()) return alert ("Enter a city name");

    try {
      setError("");
      const data = await getWeatherByCity(city);
      setWeather(data);
    } catch (err) {
      setError("Could not fetch weather, check city name or API key.");
      setWeather(null);
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Get Weather</button>

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-info">
          <h2>{weather.location.name}, {weather.location.country}</h2>
          <p>🌡 Temperature: {weather.current.temp_c}°C</p>
          <p>☁ Condition: {weather.current.condition.text}</p>
          <img src={weather.current.condition.icon} alt="weather icon" />

        </div>
      )}
    </div>
  );
}

export default App;
