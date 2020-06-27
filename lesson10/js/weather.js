const currentURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=2daa9d071489be411f57523f3d6ec725&units=imperial"

fetch(currentURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById("currentTemp").textContent = jsObject.main.temp.toFixed(0);
        document.getElementById("currentDesc").textContent = jsObject.weather[0].description;
        document.getElementById("temp").textContent = jsObject.main.temp_max.toFixed(0);
        document.getElementById("humidity").textContent = jsObject.main.humidity;
        document.getElementById("speed").textContent = jsObject.wind.speed.toFixed(0);
        
    });











const forcastURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=2daa9d071489be411f57523f3d6ec725&units=imperial"