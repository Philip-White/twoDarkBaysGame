var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8080);
