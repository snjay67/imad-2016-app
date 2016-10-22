var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles  = {
    article_one : {title : 'Article One',
               heading : 'This is Test Article one - 1',
               date : 'Sep 20th 2016',
               content :`
                    Content for article
                        `
              },
    article_two : {title : 'Article Two',
               heading : 'This is Test Article Two',
               date : 'Sep 20th 2016',
               content :`
                    Content for article Two
                        `
                },
    article_three : {title : 'Article Three',
               heading : 'This is Test Article Three',
               date : 'Sep 20th 2016',
               content:`
                    Content for article Three
                        `
                }
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
var counter = 0;
app.get('/counter',function(req,res){
    counter += 1 ;
    res.send(counter.toString());
});

var names = [];
app.get('/submit-name',function(req,res){
    var name = req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});

app.get('/:article_name', function (req, res) {
        const pg = require('pg');
const connectionString = 'postgres://localhost:5432/snjay67';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
  'CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', () => { client.end(); });
    res.send("Test");
    var articlename = req.params.article_name;
//    res.send("test");
  res.send(get_template(articles[articlename]));
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
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
