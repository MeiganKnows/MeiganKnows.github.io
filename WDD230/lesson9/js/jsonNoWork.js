const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); //temporary checking for valid response and data parsing
        const towndata = jsonObject["towndata"];
        for (let i = 0; i < towndata.length; i++) {
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
            p1.textContent = "Founded in " + town[i].yearFounded;
            p2.textContent = "Population: " + towndata[i].currentPopulation;
            p3.textContent = "Average Rainfall: " + towndata[i].averageRainfall;
            img.setAttribute("src", towndata[i].name + "500.jpg");
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
    });






    const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        const myTowns = towns.filter(town => (town.name == 'Preston' || town.name == 'Soda Springs' || town.name == 'Fish Haven'));

        myTowns.forEach(town => {

            let card = document.createElement('div');
            let townData = document.createElement('div');
            let townName = document.createElement('h2');
            let townMotto = document.createElement('h3');
            let townYear = document.createElement('p');
            let townPopulation = document.createElement('p');
            let townRain = document.createElement('p');
            let image = document.createElement('img');

                townName.innerHTML = `${town.name}`;
                townMotto.innerHTML = `${town.motto}`;
                townYear.innerHTML = `Year Founded: ${town.yearFounded}`;
                townPopulation.innerHTML = `Population: ${town.currentPopulation}`;
                townRain.innerHTML = `Annual Rain Fall: ${town.averageRainfall}`;

                    card.appendChild(townData)
                    townData.appendChild(townName);
                    townData.appendChild(townMotto);
                    townData.appendChild(townYear);
                    townData.appendChild(townPopulation);
                    townData.appendChild(townRain);
                    image.setAttribute('src', `./images/homepage/${town.photo}`);
                    image.setAttribute('alt', `${town.name}: ${town.motto}`);
                    card.appendChild(image);

            document.querySelector('div.townData').appendChild(card);
        });
    });