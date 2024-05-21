const API_KEY = "16a31c8d080e80aee16040216a812275";
const CITY_NAME = "Darıca";

const cityElement = document.querySelector(".city");
const tempElement = document.querySelector(".temp");
const descElement = document.querySelector(".desc");
const minmaxElement = document.querySelector(".minmax");

function displayWeatherData(data) {
  const weatherDescription = data.weather[0].description;
  const temperature = data.main.temp;
  const minTemp = data.main.temp_min;
  const maxTemp = data.main.temp_max;

  cityElement.textContent = CITY_NAME;
  tempElement.textContent = `${temperature} °C`;
  descElement.textContent = weatherDescription;
  minmaxElement.textContent = `Min: ${minTemp} °C, Max: ${maxTemp} °C`;
}

function getWeatherData() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&lang=tr&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => displayWeatherData(data))
    .catch(error => {
      console.log("Hata:", error);
      cityElement.textContent = "Hava durumu verileri alınamadı.";
    });
  }

getWeatherData();
