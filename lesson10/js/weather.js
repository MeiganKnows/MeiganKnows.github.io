const currentURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=2daa9d071489be411f57523f3d6ec725&units=imperial"

fetch(currentURL)
    .then((response) => response.json())
    .then((jsObject) => {
        // console.log(jsObject);
        document.getElementById("currentTemp").textContent = jsObject.main.temp.toFixed(0);
        document.getElementById("currentDesc").textContent = jsObject.weather[0].description;
        document.getElementById("temp").textContent = jsObject.main.temp_max.toFixed(0);
        document.getElementById("humidity").textContent = jsObject.main.humidity;
        document.getElementById("speed").textContent = jsObject.wind.speed.toFixed(0);

    });

const forcastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=2daa9d071489be411f57523f3d6ec725&units=imperial";

fetch(forcastURL)
    .then((response) => response.json())
    .then((jsObject2) => {
        const fiveday = jsObject2.list.filter(x => x.dt_txt.includes("18:00:00"));
        console.log(fiveday);
        for (i = 0; i < fiveday.length; i++) {
           const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            let d = new Date(fiveday[i].dt_txt);
            const imagesrc = "https://openweathermap.org/img/w/" + fiveday[i].weather[0].icon + ".png";
            const imagealt = fiveday[i].weather[0].description;
            document.getElementById("day[i]").textContent = weekday[d.getDay()];
            document.getElementById("icon[i]").setAttribute("src", imagesrc);
            document.getElementById("icon[i]").setAttribute("alt", imagealt);
            document.getElementById("temp[i]").textContent = fiveday[i].main.temp + "&#176;F";
        }
    });