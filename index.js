import constants from './src/constants.js';
import sendFetch from './src/getdata.js';
import cardFactory from './src/cardfactory.js';

constants.FORM.onsubmit = getElements;

function getElements(event) {
    let value;

    event.preventDefault();
    constants.NEWSCONTAINER.innerHTML = '';
    constants.ERRORWINDOW.classList.remove('show');
    value = this['0'].value;

    sendFetch(value)
    .then((result) => {
        insertItems(result.articles);
    })
    .catch(() => {
        errorNotification();
    });
};

function errorNotification() {
    constants.ERRORWINDOW.classList.add('show');
}

function insertItems(articlesArray) {
    for (let item of articlesArray) {
        cardFactory(item);
    };
};

String.prototype.replaceAll = function(search, replace){
    return this.split(search).join(replace);
};
