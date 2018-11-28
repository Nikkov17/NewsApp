import cardFactory from './cardfactory.js';

export default function insertItems(articlesArray) {
    for (let item of articlesArray) {
        cardFactory(item);
    };
};