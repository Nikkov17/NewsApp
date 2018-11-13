const apiKey = 'b1489445b9fb4d2b98dbf211c114989b';
const newsContainer = document.querySelector('.news-container');
const form = document.querySelector('.form');
const notification = document.querySelector('.error-notification');
const searchButton = document.querySelector('.search-button');

form.onsubmit = getElements;

function getElements(event) {
    event.preventDefault();
    newsContainer.innerHTML = '';
    notification.innerHTML = '';
    let value = this['0'].value;

    SendFetch(value);
};

function SendFetch(value) {
    let url = `https://newsapi.org/v2/top-headlines?` +
        `sources=${value}&` +
        `apiKey=${apiKey}`;

    fetch(url)
        .then((response) => {
            let result = response.json();
            return result;
        })
        .then((result) => {
            insertItems(result.articles);
        })
        .catch(() => {
            errorNotification();
        })
};

function errorNotification() {
    let errorWindow = document.createElement('p');
    errorWindow.classList = 'error-notification';
    errorWindow.innerText = 'Entered news channel nonexistent or unavailable!';
    notification.appendChild(errorWindow);
}

function insertItems(articlesArray) {
    for (let item of articlesArray) {
        cardFactory(item);
    };
};

function cardFactory(item) {
    let { author, title, content, description, publishedAt, urlToImage, url } = item;

    let element = document.createElement('section');
    let itemHeader = document.createElement('div');
    let itemHeaderInfo = document.createElement('div');
    let itemTitle = document.createElement('div');
    let itemAuthor = document.createElement('div');
    let itemPublishedAt = document.createElement('div');
    let itemLinkToOrigin = document.createElement('a');
    let itemImage = document.createElement('img');
    let itemArticle = document.createElement('article');
    let itemContent = document.createElement('article');

    itemTitle.classList = 'news-item-title';
    itemTitle.innerText = title;

    itemAuthor.classList = 'news-item-author';
    itemAuthor.innerText = author;

    itemPublishedAt.classList = 'news-item-publishedat';
    let formattedDateTimeString = formatDateTime(publishedAt);
    itemPublishedAt.innerText = formattedDateTimeString;

    itemLinkToOrigin.classList = 'news-item-link-to-original';
    itemLinkToOrigin.innerText = 'Link to original article';
    itemLinkToOrigin.href = url;

    itemHeaderInfo.classList = 'news-item-header-info';
    itemHeaderInfo.appendChild(itemTitle);
    itemHeaderInfo.appendChild(itemAuthor);
    itemHeaderInfo.appendChild(itemPublishedAt);
    itemHeaderInfo.appendChild(itemLinkToOrigin);

    itemHeader.classList = 'news-item-header';
    itemHeader.appendChild(itemHeaderInfo);
    if (urlToImage) {
        itemImage.classList = 'news-item-header-image';
        itemImage.src = urlToImage;
        itemHeader.appendChild(itemImage);
    };

    itemArticle.classList = 'news-item-article';
    itemArticle.innerText = description;
    
    itemContent.classList = 'news-item-article';
    itemContent.innerText = content;

    element.className = 'news-item';
    element.appendChild(itemHeader);
    element.appendChild(itemArticle);
    element.appendChild(itemContent);

    newsContainer.appendChild(element);
};

function formatDateTime(dateTimeString) {
    let yearDayMonth = dateTimeString.split('T')[0].replaceAll('-','.');
    let time = dateTimeString.split('T')[1].substring(0,5);
    return `published ${yearDayMonth} at ${time}.`;
}

String.prototype.replaceAll = function(search, replace){
    return this.split(search).join(replace);
}
