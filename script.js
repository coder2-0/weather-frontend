function getWeather() {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=calgary&appid=8da225f4107ffbb8a4c63062b24b7886`;

  fetch(apiUrl)
    .then(handleResponse)
    .then(updateWeatherDisplay)
    .catch(handleError);
}

function handleResponse(response) {
  if (!response.ok) {
    throw new Error('Failed to fetch weather data: ' + response.status);
  }
  return response.json();
}

function updateWeatherDisplay(weatherData) {
  const weatherElement = document.getElementById("weather");
  const tempElement = document.getElementById("temp");
  const descElement = document.getElementById("desc");

  weatherElement.textContent = weatherData.weather[0].main;
  tempElement.textContent = `Temp: ${weatherData.main.temp} | Feels like: ${weatherData.main.feels_like} | Wind: ${weatherData.wind.speed} | Humidity: ${weatherData.main.humidity}`;
  descElement.textContent = weatherData.weather[0].description;
}

function handleError(error) {
  console.error('Error fetching weather data:', error.message);
}

window.onload = () => {
  getWeather();
};
