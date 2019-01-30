let express = require('express');
let router = express.Router();
let passport = require('passport');

let usersModel = require('../src/models/usersModel');

//routing
router.get('/', (req, res) => {
	res.render('users', {});
});

router.get('/register', function(req, res) {
    res.render('register', {});
});

router.get('/login', function(req, res) {
    res.render('login', { user : req.user });
});

router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

//registration
router.post('/register', function(req, res) {
    usersModel.register(new usersModel({ username: req.body.username }), req.body.password, function(err, user){
      if (err) {
        return res.render('error', { message: err });
      }

      passport.authenticate('local')(req, res, function(){
        res.redirect('/');
      })
    })
});
  
//login
router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

module.exports = router;