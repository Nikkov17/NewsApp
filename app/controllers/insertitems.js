import cardFactory from '../views/cardfactory';
import articlesModel from '../models/articlesmodel';

export default function insertItems() {
    let articles = articlesModel.get();
    for (let item of articles) {
        cardFactory(item);
    };
};