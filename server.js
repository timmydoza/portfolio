var express = require('express');
var app = express();
var compression = require('compression');

app.use(compression());
app.use('/', express.static('build'));

app.listen('3000', function() {
  console.log('server up on port 3000');
});
