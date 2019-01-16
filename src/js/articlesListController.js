const newArticleButton = document.querySelector('.newArticleButton');
const newArticleTitle = document.querySelector('.newArticleTitle');
const newArticleText = document.querySelector('.newArticleText');

newArticleButton.addEventListener('click', () => {
    let ArticleTitle = newArticleTitle.value;
    let ArticleText = newArticleText.value;
    let xhr = new XMLHttpRequest();
    let body = {
		title: ArticleTitle,
		text: ArticleText
	};

	xhr.open('PUT', '/articlesList/' + ArticleTitle);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onreadystatechange = function () {
        window.location.href = '/articlesList';
    };
	xhr.send(JSON.stringify(body));
})