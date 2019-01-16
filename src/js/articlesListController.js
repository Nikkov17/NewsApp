const articlesList = document.querySelector('.articlesList');
const newArticleButton = document.querySelector('.newArticleButton');
const newArticleTitle = document.querySelector('.newArticleTitle');
const newArticleText = document.querySelector('.newArticleText');
const deleteArticleTitle = document.querySelector('.deleteArticleTitle');
const deleteArticleButton = document.querySelector('.deleteArticleButton');

newArticleButton.addEventListener('click', () => {
    let articleTitle = newArticleTitle.value;
    let articleText = newArticleText.value;
    let xhr;
    let body;

    if (articleTitle) {
        xhr = new XMLHttpRequest();
        body = {
            title: articleTitle,
            text: articleText
        };

        xhr.open('PUT', '/articlesList/' + articleTitle);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    window.location.href = '/articlesList';
                } else {
                    alert(xhr.response);
                    window.location.href = '/articlesList';
                }
            }
        };
        xhr.send(JSON.stringify(body));
    }
});

deleteArticleButton.addEventListener('click', () => {
    let articleTitle = deleteArticleTitle.value;
    let xhr = new XMLHttpRequest();

    xhr.open('DELETE', '/articlesList/' + articleTitle);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            window.location.href = '/articlesList';
        }
    };
    xhr.send();
});
