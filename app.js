var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./controllers/setupController');
var apiController = require('./apiController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/assets'));

app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnectionString());
setupController(app);
apiController(app);


app.listen(port);



