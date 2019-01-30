let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let pug = require('pug');
let logger = require('./src/js/logger');
let mongoose = require('mongoose');
let session = require('express-session');
let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let usersModel = require('./src/models/usersModel');

let app = express();

//db connect
mongoose.connect('mongodb://localhost/frontcamp', { useNewUrlParser: true });

//view engine
app.set('view engine', 'pug');
app.set('views', './views/');

//static folder path
app.use(express.static(path.join(__dirname, 'src')));

//bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//logger
app.use((req, res, next) => {
	logger.info(`Url: ${req.url}, Date: ${(new Date()).toLocaleTimeString()}`);
	next();
});

//session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

//passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(usersModel.authenticate()));
passport.serializeUser(usersModel.serializeUser());
passport.deserializeUser(usersModel.deserializeUser());

//routing
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/articlesList', require('./routes/articlesList'));

app.use('/users', require('./routes/users'));

//error handling
app.use((req, res, next) => {
    res.render('error', { message: 'Sorry, but something went wrong!' });
});

app.listen(3000);