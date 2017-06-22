var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var port = process.env.PORT || 8000;
var path = require('path');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static('public'));
app.use(cors());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var counter = 3;

var db = [
  {
    id: 1,
    name: "dave"
  },
  {
    id: 2,
    name: 'mike'
  }
]

app.get('/', function (req, res) {
  res.render('index', {
    someArray: db
  });
});

app.post('/add', function(req, res) {
  db.push({
    id: counter,
    name: req.body.name
  })
  counter++;
  res.redirect('/')
})

app.listen(port, function () {
  console.log('listening on: ', port);
});
