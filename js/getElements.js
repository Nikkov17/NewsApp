import constants from './constants.js';
import sendFetch from './getdata.js';
import errorNotification from './errornotification.js';
import insertItems from './insertitems.js';

constants.FORM.onsubmit = getElements;

export default async function getElements(event) {
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

String.prototype.replaceAll = function(search, replace){
    return this.split(search).join(replace);
};
