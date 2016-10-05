console.log('Loaded!');
// Change main text

var element = document.getElementById("main_text");
element.innerHTML = "New Value";

//Move the image to right

var img = document.getElementById("madi");

var marginLeft = 0;

function moveRight() {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
    img.style.marginLeft = "100px";
    var interval = setInterval(moveRight, 100);
}