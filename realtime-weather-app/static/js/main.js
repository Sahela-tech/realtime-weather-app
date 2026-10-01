const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY"; 

document.getElementById('searchBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if(city) fetchWeather(city);
});

async function fetchWeather(city) {
    if (API_KEY === "YOUR_OPENWEATHERMAP_API_KEY") {
        alert("Please replace YOUR_OPENWEATHERMAP_API_KEY with your OpenWeatherMap API Key in static/js/main.js!");
        return;
    }
    
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        if(!response.ok) throw new Error("City not found");
        
        const data = await response.json();
        
        document.getElementById('cityName').innerText = data.name;
        document.getElementById('description').innerText = data.weather[0].description;
        document.getElementById('temperature').innerText = Math.round(data.main.temp);
        document.getElementById('humidity').innerText = data.main.humidity;
        document.getElementById('windSpeed').innerText = data.wind.speed;
    } catch (error) {
        alert(error.message);
    }
}

window.onload = () => fetchWeather("Colombo");
