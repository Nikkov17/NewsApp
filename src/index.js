require("../node_modules/babel-polyfill/browser");
import constants from './constants.js';
import sendFetch from './getdata.js';
import cardFactory from './cardfactory.js';

constants.FORM.onsubmit = getElements;

async function getElements(event) {
    let value;
    let articlesArray;

    event.preventDefault();
    constants.NEWSCONTAINER.innerHTML = '';
    constants.ERRORWINDOW.classList.remove('show');
    value = this['0'].value;

    try {
        articlesArray = await sendFetch(value)
        insertItems(articlesArray);
    } catch {
        errorNotification();
    }
};

function insertItems(articlesArray) {
    for (let item of articlesArray) {
        cardFactory(item);
    };
};

function errorNotification() {
    constants.ERRORWINDOW.classList.add('show');
};

String.prototype.replaceAll = function(search, replace){
    return this.split(search).join(replace);
};
