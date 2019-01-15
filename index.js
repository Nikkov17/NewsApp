let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let pug = require('pug');

let app = express();

app.set('view engine', 'pug');
app.set('views', './views/');

app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/articles', require('./routes/articles'));

app.listen(3000);