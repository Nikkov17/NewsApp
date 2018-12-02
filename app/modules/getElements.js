import 'babel-polyfill';
import 'whatwg-fetch';
import constants from './constants.js';
import sendFetch from './getdata.js';
import insertItems from './insertitems.js';

export default async function getElements(value) {
    let articlesArray;

    constants.NEWSCONTAINER.innerHTML = '';
    constants.ERRORWINDOW.classList.remove('show');

    try {
        articlesArray = await sendFetch(value)
        insertItems(articlesArray);
    } catch {
        import('./errornotification').then((module) => {
            module.default();
        })
    }
};

String.prototype.replaceAll = function(search, replace){
    return this.split(search).join(replace);
};
