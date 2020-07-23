const data = "rentalinfo.json";

fetch(data)
    .then((response) => response.json())
    .then((jsObject) => {
        for (i = 0; i < jsObject.length; i++) {
            document.getElementById("type" + i).textContent = jsObject[i].type;
            document.getElementById("max" + i).textContent = jsOjject[i].maxperson;
            document.getElementById("rhalf" + i).textContent = jsObject[i].reservehalf;
            document.getElementById("rwhole" + i).textContent = jsObject[i].reservewhole;
            document.getElementById("whlaf" + i).textContent = jsObject[i].walkinhalf;
            document.getElementById("wwhole" + i).textContent = jsObject[i].walkinwhole;
        }

    });