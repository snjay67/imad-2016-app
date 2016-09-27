console.log('Loaded!');
var element = document.getElementById("titl");
element.innerHTML = "New value";
var img = document.getElementById("madi");
console.log("Assigneg Img");
img.onClick = function()
{
    console.log("Changing Margin");
    img.style.marginLeft = "100px";
};