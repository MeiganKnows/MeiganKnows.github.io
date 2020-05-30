var t = parseFloat(document.getElementById("temp"));
var s = parseFloat(document.getElementById("speed"));
var f;
if (t < 50 && s > 3) {
    f = 35.74 + 0.6215*t -35.75 * Math.pow(s, 0.16) + 0.4275*t*Math.pow(s, 0.16);
}
else{
    f="N/A";
}
document.getElementById("chill").innerHTML= f;