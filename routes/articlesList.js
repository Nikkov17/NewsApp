let express = require('express');
let router = express.Router();

let articlesModel = require('../src/js/articlesModel');

router.get('/', (req, res) => {
	articlesModel.find({}, (error, articlesArray) => {
		res.render('articlesList', {articles: articlesArray})
	});
});
router.get('/:title', (req, res, next) => {
	let title = req.params.title;

	articlesModel.findOne({'title': title}, (error, article) => {
		if (article) {
			res.render('article', {article: article})
		} else {
			next();
		};
	});
});


router.put('/:title', function(req, res, next) {
	articlesModel.findOne({'title': req.body.title}, (error, article) => {
		if (article) {
			res.status(400).send('Please, use unique title for the articles!');
		} else {
			let article = new articlesModel({
				title: req.body.title,
				text: req.body.text
			});

			article.save()
				.then(() => {
					res.redirect('/articles');
				})
				.catch((err) => {
					console.log(err);
				});
		}
	});
});

router.delete('/:title', function(req, res, next) {
	let title = req.params.title;

	articlesModel.deleteMany({'title': title}, () => {
		res.redirect('/articles');
	});
});

router.post('/:title', function(req, res, next) {
	let title = req.body.title;
	let text = req.body.text;

	articlesModel.update({'title': title}, {'title': title, 'text': text});
	res.redirect('/articles');
});

module.exports = router;