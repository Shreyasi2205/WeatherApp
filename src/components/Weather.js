import { useState } from "react";
import { API_KEY } from "../api_data/constant";

function Weather() {
    const [cityQuery, setCityQuery] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    async function handleWeather() {
        if (cityQuery) {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityQuery}&appid=${API_KEY}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch weather data');
                }
                const data = await response.json();
                setWeatherData(data);
                console.log(data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setWeatherData(null);
            }
        }
    };

    async function fetchWeather(e) {
        if (e.code === "Enter") {
            e.preventDefault();  // Prevents the form from submitting the default way and refreshing the page
            await handleWeather();
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-gray-800">
            <div className="max-w-md w-full bg-white p-8 rounded shadow-lg flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold mb-4">Weather App</h1>
                <form className="mb-4 w-full max-w-md" onKeyDown={fetchWeather}>
                    <input
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-2"
                        type="text"
                        placeholder="Enter City Name"
                        value={cityQuery}
                        onChange={(e) => setCityQuery(e.target.value)}
                        required
                    />
                    <button type="button" className="mt-2 w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        onClick={handleWeather}>
                        Get Weather
                    </button>
                </form>
                {error && <p className="text-red-500">{error}</p>}
                {weatherData && weatherData.main && weatherData.weather && (
                    <div className="mt-4 text-center">
                        <h2 className="text-2xl font-bold">{weatherData.name}</h2>
                        <p className="text-lg">Temperature: {(weatherData.main.temp - 273.15).toFixed(2)}°C</p>
                        <p className="text-lg">Weather: {weatherData.weather[0].description}</p>
                        <p className="text-lg">Humidity: {weatherData.main.humidity}%</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Weather;
