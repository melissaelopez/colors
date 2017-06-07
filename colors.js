document.getElementById("hex-rgb-converter").style.visibility = "visible";
document.getElementById("palettes").style.visibility = "hidden";

$("#hrBtn").click(function() {
    document.getElementById("hex-rgb-converter").style.visibility = "visible";
    document.getElementById("palettes").style.visibility = "hidden";
});
$("#cpBtn").click(function() {
    document.getElementById("hex-rgb-converter").style.visibility = "hidden";
    document.getElementById("palettes").style.visibility = "visible";
});
