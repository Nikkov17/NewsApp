import cardFactory from './cardfactory.js';
import articlesModel from './articlesmodel';

export default function insertItems() {
    let articles = articlesModel.get();
    for (let item of articles) {
        cardFactory(item);
    };
};