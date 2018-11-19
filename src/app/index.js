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

    articlesArray = await sendFetch(value)
    insertItems(articlesArray);
};

function insertItems(articlesArray) {
    for (let item of articlesArray) {
        cardFactory(item);
    };
};

String.prototype.replaceAll = function(search, replace){
    return this.split(search).join(replace);
};
