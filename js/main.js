var opacity = 0.4;
var intervalID = 0;
window.onload = fadeIn;

function fadeIn() {
    setInterval(show, 33.3);
}

function show() {
    var body = document.querySelector("body");
    opacity = Number(window.getComputedStyle(body)
                     .getPropertyValue("opacity"));
    if (opacity < 1) {
        opacity = opacity + 0.02;
        body.style.opacity = opacity
    } else {
        clearInterval(intervalID);
    }
}
