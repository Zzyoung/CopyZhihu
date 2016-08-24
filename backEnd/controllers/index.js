var mongoose = require('mongoose');
// var User = mongoose.model('User');

exports.index = function (req, res) {
    var user = req.session.user;
    if (user) {
        res.render('main',{
            title: '知乎 - 首页'
        });
    } else {
        res.render('index',{
            title: '知乎 - 首页'
        });
    }
    
}