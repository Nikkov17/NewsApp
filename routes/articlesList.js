let express = require('express');
let router = express.Router();
let fs = require('fs');

let data = fs.readFileSync('./src/json/articles.json', 'utf8');
let articlesArray = JSON.parse(data);

router.get('/', function(req, res) {
	res.render('articlesList', { articles: articlesArray});
});

router.get('/:id', function(req, res) {
    let id = req.params.id;
    let article = articlesArray.find((el) => {return el.id === id});

	if (article) {
		res.render('article', {article: article});
	};
});

module.exports = router;