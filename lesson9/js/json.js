const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject){
        console.table(jsonObject);
        const towns = jsonObject["towns"];
        const mytowns = towns.filter(town => (town.name =="Preston"||town.name=="Soda Springs"||town.name=="Fish Haven"));

        mytowns.forEach(town => {
            let card = document.createElement("section");
            let data = document.createElement("div");
            let h3 = document.createElement("h3");
            let h4 = document.createElement("h4");
            let p1 = document.createElement("p");
            let p2 = document.createElement("p");
            let p3 = document.createElement("p");
            let img = document.createElement("img");

            h3.textContent = `${town.name}`;
            h4.textContent = `${town.motto}`;
            p1.textContent = `Founded in ${town.yearFounded}`;
            p2.textContent = `Population: ${town.currentPopulation}`;
            p3.textContent = `Average Rainfall: ${town.averageRainfall}`;
            img.setAttribute("src", `/image/${town.name}500.jpg`);
            img.setAttribute("alt", `${town.name}, Idaho`);

            data.appendChild(h3);
            data.appendChild(h4);
            data.appendChild(p1);
            data.appendChild(p2);
            data.appendChild(p3);
            card.appendChild(data);
            card.appendChild(img);

            document.querySelector("div.towndata").appendChild(card);
        });
    });