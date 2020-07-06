//Today's date at the bottom of the footer
var d = new Date();
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("curDate").innerHTML = day[d.getDay()] + ", " + d.getDate() + " " +
    month[d.getMonth()] + " " + d.getFullYear();

//hamburger menu
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}