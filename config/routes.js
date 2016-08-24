var Index = require('../backEnd/controllers/index');
var User = require('../backEnd/controllers/user');

module.exports = function(app) {
  //pre handle user
  app.use(function(req, res, next) {
    var user = req.session.user;

    app.locals.user = user;
    
    return next();
  })

  //Index
  app.get('/',Index.index);

  //User
  app.post('/user/register',User.register);
  app.post('/user/login',User.login);

}