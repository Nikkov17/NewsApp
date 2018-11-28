import '../../styles/reset.css';
import '../../styles/style.scss';
import 'babel-polyfill';
import 'whatwg-fetch';
import jsonFile from '../jsonFile.json';
import constants from './constants.js';
import sendFetch from './getdata.js';
import errorNotification from './errornotification.js';
import insertItems from './insertitems.js';

constants.FORM.onsubmit = getElements;

export default async function getElements(event) {
    let value;
    let articlesArray;

    console.log(jsonFile);

    if(event) {
        event.preventDefault();
    }
    constants.NEWSCONTAINER.innerHTML = '';
    constants.ERRORWINDOW.classList.remove('show');
    if(this) {
        value = this['0'].value;
    }

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
