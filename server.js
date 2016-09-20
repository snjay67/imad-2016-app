var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var art_one = {title : "<title> Article One </title>", heading : "<h1>  This is Test Article one </h1>",
               date : "<div> Sep 20th 2016 </div>",
               content :`
                           <div>
                <p>
                    Content for article
                </p>
            </div>
`};
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
        $(title)
        <meta name="viewport" width="device-width, initial-scale=1"/> 
    </head>
    <body>
        <div class="container">
            $(heading)
            $(date)
            $(content)
        </div>
    </body>
</html>`;
    return html_content;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article_one', function (req, res) {
  res.send(get_template(art_one));
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
