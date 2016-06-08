var express = require('express');
var app = express();

app.get('/hello', function (req, res) {
  res.send('SUCCESS');
});

app.listen(8586);
