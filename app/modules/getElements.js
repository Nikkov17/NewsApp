import 'babel-polyfill';
import 'whatwg-fetch';
import constants from './constants.js';
import sendFetch from './getdata.js';
import insertItems from './insertitems.js';
import articlesModel from './articlesmodel';

export default async function getElements(value) {
    let articlesArray;

    constants.NEWSCONTAINER.innerHTML = '';
    constants.ERRORWINDOW.classList.remove('show');

    try {
        articlesArray = await sendFetch(value)
        if (articlesModel.checkArticlesUniqueness(articlesArray)) {
            articlesModel.set(articlesArray);
            insertItems();
        }
    } catch {
        import('./errornotification').then((module) => {
            const errorSingleton = module.default;
            errorSingleton.errorNotification();
        })
    }
};

String.prototype.replaceAll = function(search, replace){
    return this.split(search).join(replace);
};
