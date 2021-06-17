// require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000; // use port 3000

var cookieParser = require('cookie-parser');
app.use(cookieParser());

const cors = require('cors');
app.use(cors());

// const middle1 = require('./modules/middle1.js');
// const final = require('./modules/final.js');

// app.use(middle1);
// app.get('/', final); // just a try...

app.get('/', function (req, res) {
  console.log('home route');
  res.send(req.cookies);
  console.log('Cookies: ', req.cookies);
});

app.get('/set', function (req, res) {
  console.log('>>set route');
  res.cookie('loggedin', 'true');
  res.send('coockie was sent');
  console.log('Cookies: ', req.cookies);
});

app.get('/read', (req, res) => {
  console.log('read route');
  let response = 'Not logged in!';
  if (req.cookies.loggedin == 'true') {
    response = 'Yup! You are logged in!';
  }
  res.send(response);
});

app.listen(port, function () {
  console.log(`Server running and listening on port ${port}`);
});
