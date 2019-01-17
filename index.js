let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let pug = require('pug');
let logger = require('./src/js/logger');

let app = express();

app.set('view engine', 'pug');
app.set('views', './views/');

app.use(express.static(path.join(__dirname, 'src')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use((req, res, next) => {
	logger.info(`Url: ${req.url}, Date: ${(new Date()).toLocaleTimeString()}`);
	next();
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.use('/articlesList', require('./routes/articlesList'));
app.use((req, res, next) => {
    res.render('error', { message: 'Sorry, but something went wrong!' });
});

app.listen(3000);