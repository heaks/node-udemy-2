// last lesson 55
const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  var friends = [
    {name: 'Victor', age: 25},
    {name: 'Steve', age: 24}
  ];
  res.send(friends);
});

app.listen(3000);
module.exports.app = app;