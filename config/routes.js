module.exports = function(app) {
  //pre handle user
  app.use(function(req, res, next) {
    var user = req.session.user;

    app.locals.user = user;
    
    return next();
  })

  //Index
  app.get('/',function (req, res) {
    res.redirect('/Zhihu/');
  });

}

