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

app.get('/', function (req, res) {
  res.render('index', {
    someArray: [{
      name: "dave"
    },
    {
      name: 'mike'
    }]
  });
});

app.post('/auth', function (req, res) {
  if (req.body.username === 'something' && req.body.password === 'somepassword') {
    res.redirect('/user');
  } else {
    res.redirect('home');
  }
});

app.listen(port, function () {
  console.log('listening on: ', port);
});
