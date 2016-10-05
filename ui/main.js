console.log('Loaded!');
// Change main text

var element = document.getElementById("main_text");
element.innerHTML = "New Value";

//Move the image to right

var img = document.getElementById("madi");
img.onClick = function() {
    img.style.marginLeft = "100px";
}