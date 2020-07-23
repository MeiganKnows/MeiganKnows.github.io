const data = "wireframes/rentalinfo.json";

fetch(data)
    .then((response) => response.json())
    .then((jsObject) => {
        for (i = 0; i < jsObject.rentals.length; i++) {
            document.getElementById("type" + i).textContent = jsObject.rentals[i].type;
            document.getElementById("max" + i).textContent = jsObject.rentals[i].maxperson;
            document.getElementById("rhalf" + i).textContent = jsObject.rentals[i].reservehalf;
            document.getElementById("rwhole" + i).textContent = jsObject.rentals[i].reservewhole;
            document.getElementById("whalf" + i).textContent = jsObject.rentals[i].walkinhalf;
            document.getElementById("wwhole" + i).textContent = jsObject.rentals[i].walkinwhole;
        }

    });