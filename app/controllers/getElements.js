import 'babel-polyfill';
import 'whatwg-fetch';
import constants from '../constants';
import sendFetch from './getdata';
import insertItems from './insertitems';
import articlesModel from '../models/articlesmodel';

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
