fetch(rentaldata.json)
    .then((response)=> response.json())
    .then((jsObject) => {
        console.log(jsObject);
        for(i=0; i<jsObject.length; i++){
            document.getElementById("type" + i).textContent = jsObject[i].type;
        }

    })