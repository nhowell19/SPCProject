var express = require('express');
var app = express();

var morgan = require('morgan');

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));

app.get('*', function (req, res) {
  res.sendFile('index.html');
});

app.listen(app.get('port'), function (err) {
  if(err) console.log(err);

 console.log('Listening on port 3000');
})
