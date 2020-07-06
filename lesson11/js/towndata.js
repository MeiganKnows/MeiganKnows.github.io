const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towndata = jsonObject["towns"];
        for (let i = 0; i < towndata.length; i++) {
            if (towndata[i].name == "Preston" || towndata[i].name == "Soda Springs" || towndata[i].name == "Fish Haven") {
                
                let card = document.createElement("section");
                let data = document.createElement("div");
                let h3 = document.createElement("h3");
                let h4 = document.createElement("h4");
                let p1 = document.createElement("p");
                let p2 = document.createElement("p");
                let p3 = document.createElement("p");
                let img = document.createElement("img");
                

                h3.textContent = towndata[i].name;
                h4.textContent = towndata[i].motto;
                p1.textContent = "Founded in " + towndata[i].yearFounded;
                p2.textContent = "Population: " + towndata[i].currentPopulation;
                p3.textContent = "Average Rainfall: " + towndata[i].averageRainfall;
                img.setAttribute("src", "images/" + towndata[i].name + "500.jpg");
                img.setAttribute("alt", "Beautiful picture of " + towndata[i].name);
                
                data.appendChild(h3);
                data.appendChild(h4);
                data.appendChild(p1);
                data.appendChild(p2);
                data.appendChild(p3);
                card.appendChild(data);
                card.appendChild(img);

                document.querySelector("div.towndata").appendChild(card);

                
            }
        }
    });