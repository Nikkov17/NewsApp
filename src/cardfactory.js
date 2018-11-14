import constants from './constants.js';

export default function cardFactory(item) {
    let { author, title, content, description, publishedAt, urlToImage, url } = item;
    let insertString = 
    `<div class="news-item-header">
        <div class="news-item-header-info">
            ${title ? `<div class="news-item-title">${title}</div>` : ``}
            ${author ? `<div class="news-item-author">${author}</div>` : ``}
            ${publishedAt ? `<div class="news-item-publishedat">${formatDateTime(publishedAt)}</div>` : ``}
            ${url ? `<a class="news-item-link-to-original" href=${url}>Link to original article</a>` : ``}
        </div>
        ${urlToImage ? `<img class="news-item-header-image" src=${urlToImage}>` : ``}
    </div>
    ${content ? `<article class="news-item-article">${content}</article>` : ``}
    ${description ? `<article class="news-item-article">${description}</article>` : ``}`;

    render(insertString);
};

function render(elementHtml) {
    let newsItem = document.createElement('div');
    newsItem.className = 'news-item';
    newsItem.innerHTML = elementHtml;
    constants.NEWSCONTAINER.appendChild(newsItem);
}

function formatDateTime(dateTimeString) {
    let yearDayMonth = dateTimeString.split('T')[0].replaceAll('-','.');
    let time = dateTimeString.split('T')[1].substring(0,5);

    return `published ${yearDayMonth} at ${time}.`;
};
