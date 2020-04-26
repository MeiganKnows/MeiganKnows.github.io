let d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;

let modify = new Date(document.lastModified);
document.getElementById("modDate").innerHTML = modify;