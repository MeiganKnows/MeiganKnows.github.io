var d = new Date();
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("curDate").innerHTML = day[d.getDay()] + ", " + d.getDate() + " " +
    month[d.getMonth()] + " " + d.getFullYear();


function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}


if (day[d.getDay()] == "Friday") {
    document.getElementById("banner").style.display = "block";
} else {
    document.getElementById("banner").style.display = "none";
}