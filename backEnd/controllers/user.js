var mongoose = require('mongoose')
require('../models/user')
var User = mongoose.model('User')
const UNKNOWN_LOGINNAME = 1;
const ERROR_PASSWORD_LOGINNAME = 2;
const ERROR_USER_EXIST = 3;

//register
exports.register = function (req, res, next) {
    var _user = req.body;

    User.findOne({name: _user.name},  function(err, user) {
        if (err) {
          console.log(err);
        }

        if (user) {

          res.writeHead(200, {'Content-Type': 'application/json'});
          res.end(JSON.stringify({errorCode: ERROR_USER_EXIST}));

        } else {

          user = new User(_user);
          user.save(function(err, user) {
            if (err) {
              console.log(err);
            }

            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({msg:'success'}));
          })
        }

    })
}

//login
exports.login = function (req, res) {
    var _user = req.body;

    User.findOne({loginName: _user.loginName}, function (err, user) {
        if (err) {
            console.log(err);
        }

        if (!user) {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({errorCode: UNKNOWN_LOGINNAME}));
            return;
        }

        user.comparePassword(_user.password, function (err, isMatch) {
            if (err) {
                console.log(err);
            }

            if (isMatch) {
                req.session.user = user;
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end(JSON.stringify({message: 'success'}));
                return;
            } else {
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end(JSON.stringify({errorCode: ERROR_PASSWORD_LOGINNAME}));
                return;
            }
        })
    })
}