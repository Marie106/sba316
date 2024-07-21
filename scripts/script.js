const searchBox = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherIcon = document.querySelector(".weather-icon");
const cityElement = document.querySelector(".city");
const tempElement = document.querySelector(".temp");
const humidityElement = document.querySelector(".humidity");
const windElement = document.querySelector(".wind");

function simulateWeatherData(city) {
    // Simulate weather data
    const weatherData = {
        name: city,
        main: {
            temp: Math.floor(Math.random() * 50) + 50, //  50°F to 100°F
            humidity: Math.floor(Math.random() * 50) + 50, //  50% to 100%
            wind: {
                speed: Math.floor(Math.random() * 10) + 1 // wind speed 1 mph to 10 mph
            }
        },
        weather: [
            { main: randomWeatherCondition() }
        ]
    };

    return weatherData;
}

function randomWeatherCondition() {
    const conditions = ["Clouds", "Clear", "Rain", "Drizzle", "Mist"];
    return conditions[Math.floor(Math.random() * conditions.length)];
}

function setWeatherIcon(weatherCondition) {
    switch (weatherCondition) {
        case "Clouds":
            weatherIcon.src = "images/clouds.png";
            break;
        case "Clear":
            weatherIcon.src = "images/clear.png";
            break;
        case "Rain":
            weatherIcon.src = "images/rain.png";
            break;
        case "Drizzle":
            weatherIcon.src = "images/drizzle.png";
            break;
        case "Mist":
            weatherIcon.src = "images/mist.png";
            break;
        default:
            weatherIcon.src = "images/unknown.png";
            break;
    }
}

searchBtn.addEventListener("click", () => {
    const city = searchBox.value.trim();
    if (city) {
        const weatherData = simulateWeatherData(city);
        displayWeatherData(weatherData);
    } else {
        alert('Please enter a city name');
    }
});

function displayWeatherData(data) {
    cityElement.textContent = data.name;
    tempElement.textContent = Math.round(data.main.temp) + "°F";
    humidityElement.textContent = data.main.humidity + "%";
    windElement.textContent = data.main.wind.speed + " mph";

    setWeatherIcon(data.weather[0].main);
    document.querySelector(".weather").style.display = "block";
}
