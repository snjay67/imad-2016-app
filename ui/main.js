console.log('Loaded!');
var element = document.getElementById("titl");
element.innerHTML = "New value";
var img = document.getElementById("madi");
console.log("Assigned Img");
console.log(img);
var marginleft = 0;
function moveright()
{
    marginleft = marginleft + 1;
    var mrginleft = 10;
        img.style.marginLeft = marginleft + "px";
}
img.onclick = function (){
    console.log("Changing Margin");
    var interval = setInterval(moveright,100);
};
    
var img1 = document.getElementById("dvel");
console.log("Assigned Img");
console.log(img1);
element.onclick = function () {
    console.log("Changing Margin");
    img1.style.marginLeft = "100px";};

var button = document.getElementById("btn");
button.onclick = function(){
    var counter = 0;
    var req = new XMLHttpRequest();
    req.open('GET','http://snjay67.imad.hasura-app.io/counter',true);
    req.send(null);
    req.onreadystatechange = function(){
        if (req.readyState == XMLHttpRequest.DONE )
        {
            if (req.status == 200)
            {
                var counter = req.responseText;
                var count = document.getElementById("count");
                count.innerHTML = counter.toString();
            }
        }
    };
    };
    var nameInput = document.getElementById("name");
    var nameIn = nameInput.value;
    var submit = document.getElementById("Submit");
    submit.onclick = function(){
        var names = ['name1','name2','name3'];
        var nameli = '';
        for (var index = 0; index <3; index++)
        {
            nameli = "<li>" + names[index] + "</li>";
        }
        var ul = document.getElementById("namelist");
        ul.innerHTML = nameli;
    };