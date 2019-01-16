let express = require('express');
let router = express.Router();
let fs = require('fs');

let data = fs.readFileSync('./src/json/articles.json', 'utf8');
let articlesArray = JSON.parse(data);

router.get('/', (req, res) => {
	res.render('articlesList', { articles: articlesArray});
});
router.get('/:title', (req, res, next) => {
	let title = req.params.title;
    let article = articlesArray.find((el) => {return el.title === title});

	if (article) {
		res.render('article', {article: article});
	} else {
		next();
	};
});


router.put('/:id', function(req, res, next) {
	articlesArray.push(req.body);
	fs.writeFileSync('./src/json/articles.json', JSON.stringify(articlesArray));
	next();
});

router.post('/', function(req, res, next) {
});

router.delete('/:id', function(req, res, next) {
});

module.exports = router;