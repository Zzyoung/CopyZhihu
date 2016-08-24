var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cookieSession = require('cookie-session');
// var mongoStore = require('connect-mongo')(express);
var port = process.env.PORT || 3000;
var app  = express();
var dbUrl = 'mongodb://127.0.0.1/copyZhihu';

mongoose.Promise = global.Promise;
mongoose.connect(dbUrl);

app.set('views','./public/views');//设置视图的根目录
app.set('view engine', 'jade');//设置模板引擎
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.cookieParser());
app.use(cookieSession({
  'secret' : 'copyZhihu'
}));

if ('development' === app.get('env')) {
  app.set('showStackError', true);
  app.use(logger(':method :url :status'));
  app.locals.pretty = true;//取消代码压缩
  mongoose.set('debug',true);
}

require('./config/routes')(app);

app.use(express.static(path.join(__dirname, 'public')));
app.locals.moment = require('moment');
app.listen(port);

console.log('project1 started on port : '+ port);









