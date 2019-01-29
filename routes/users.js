let express = require('express');
let router = express.Router();

let usersModel = require('../src/js/usersModel');

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

//registration
// router.post('/register', function(req, res) {
//     Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
//         if (err) {
//             return res.render('register', { account : account });
//         }

//         passport.authenticate('local')(req, res, function () {
//             res.redirect('/');
//         });
//     });
// });

//login
// router.post('/login', passport.authenticate('local'), function(req, res) {
//     res.redirect('/');
// });

//logout
// router.get('/logout', function(req, res) {
//     req.logout();
//     res.redirect('/');
// });

module.exports = router;