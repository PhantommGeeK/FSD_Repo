import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = ({ regDash }) => {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const apiKey = "eda661820e7d3b131ce2805dfe9daee2"; 
    const city = "Ghaziabad"; 
    const url = `http://api.weatherstack.com`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="jumbotron">
          <h1>User Dashboard</h1>
          <h2>Logout</h2>
          <p>Welcome {regDash.name}</p>
        </div>
        <p>You Login Email: {regDash.email}</p>
        <p>Click the button to Fetch Weather</p>
        <button className="btn btn-primary" onClick={fetchWeather}>
          Fetch Weather
        </button>
        {weather && (
          <div className="mt-4">
            <h3>Weather in {weather.name}</h3>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Weather: {weather.weather[0].description}</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind Speed: {weather.wind.speed} m/s</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;