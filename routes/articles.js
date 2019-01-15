let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');

let articlesArray = [
	{
		id: 'article1',
		title: 'article1',
		text: 'this is the first article.'
	},
	{
		id: 'article2',
		title: 'article2',
		text: 'this is the seconde article.'
	}
];

router.get('/', function(req, res) {
	res.render('articles', { articles: articlesArray});
});

router.get('/:id', function(req, res) {
    let id = req.params.id;
    let article = articlesArray.find((el) => {return el.id === id});

	if (article) {
		res.render('article', {article: article});
	};
});

module.exports = router;