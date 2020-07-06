const currentURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&APPID=2daa9d071489be411f57523f3d6ec725&units=imperial"

fetch(currentURL)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById("currentTemp").textContent = jsObject.main.temp.toFixed(0);
        document.getElementById("currentDesc").textContent = jsObject.weather[0].description;
        document.getElementById("temp").textContent = jsObject.main.temp_max.toFixed(0);
        document.getElementById("humidity").textContent = jsObject.main.humidity;
        document.getElementById("speed").textContent = jsObject.wind.speed.toFixed(0);

        var t = document.getElementById("currentTemp").textContent;
        var s = document.getElementById("speed").textContent;
        var f;
        if (t <= 50 && s > 3) {
            f = Math.round(35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16));
        } else {
            f = "N/A";
        }
        document.getElementById("chill").innerHTML = f;

    });

const forcastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&APPID=2daa9d071489be411f57523f3d6ec725&units=imperial";

fetch(forcastURL)
    .then((response) => response.json())
    .then((jsObject2) => {
        const fiveday = jsObject2.list.filter(x => x.dt_txt.includes("18:00:00"));

        for (i = 0; i < fiveday.length; i++) {
            const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            let d = new Date(fiveday[i].dt_txt);
            const imagesrc = "https://openweathermap.org/img/w/" + fiveday[i].weather[0].icon + ".png";
            const imagealt = fiveday[i].weather[0].description;
            document.getElementById("day" + i).textContent = weekday[d.getDay()];
            document.getElementById("icon" + i).setAttribute("src", imagesrc);
            document.getElementById("icon" + i).setAttribute("alt", imagealt);
            document.getElementById("temp" + i).textContent = fiveday[i].main.temp;
        }
    });

const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); //temporary checking for valid response and data parsing
        const towndata = jsonObject["towns"];
        for (let i = 0; i < towndata.length; i++) {
            if (towndata[i].name == "Soda Springs") {
               for (let x = 0; x < towndata[i].events.length; x++) {
                    let p = document.createElement("p");
                    p.textContent = towndata.event;

                }
            }
        }
    });