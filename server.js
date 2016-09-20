var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles :{
    art_one : {title : "Article One",
               heading : "This is Test Article one";
               date : "Sep 20th 2016";
               content :`
                    Content for article
`},
    art_two : {title : "Article Two",
               heading : "This is Test Article Two";
               date : "Sep 20th 2016";
               content :`
                    Content for article Two
`},
    art_three : {title : "Article Three",
               heading : "This is Test Article Three";
               date : "Sep 20th 2016";
               content :`
                    Content for article Three
`}
};
function get_template(data)
{
    title = data.title;
    heading = data.heading;
    date = data.date;
    content = data.content;
    html_content = `
    <html>
    <head>
        <link href="/ui/style.css" rel="stylesheet" />
        <title> 
        ${title}
        </title>
        <meta name="viewport" width="device-width, initial-scale=1"/> 
    </head>
    <body>
        <div class="container">
            <h1>  
                ${heading}
             </h1>
             <div> 
                ${date}
             </div>
             <div>
                 <p>
                    ${content}
                 </p>
             </div>
        </div>
    </body>
</html>`;
    return html_content;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:article_name', function (req, res) {
    var articlename = req.params.article_name;
    res.send("test");
//  res.send(get_template(articlename));
});
app.get('/article_two', function (req, res) {
  res.send("Article Two");
});
app.get('/article_three', function (req, res) {
  res.send("Article Three");
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
