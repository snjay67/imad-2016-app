console.log('Loaded!');
var element = document.getElementById("titl");
element.innerHTML = "New value";
var img = document.getElementById("madi");
console.log("Assigned Img");
console.log(img);
var marginleft = 0;
function moveright()
{
    marginleft = marginleft + 10;
    var mrginleft = 10;
        img.style.marginLeft = marginleft + "px";
}
img.onclick = function (){
    console.log("Changing Margin");
    var interval = setInterval(moveright,10);
};
    
var img1 = document.getElementById("dvel");
console.log("Assigned Img");
console.log(img1);
element.onclick = function () {
    console.log("Changing Margin");
    img1.style.marginLeft = "100px";};