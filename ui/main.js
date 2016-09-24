console.log('Loaded!');
var element = document.getElementById("titl");
element.innerHTML = "New value";
var img = document.getElementById("madi");
img.onClick = function()
{
    img.style.marginLeft = "100px";
};