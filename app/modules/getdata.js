import constants from './constants.js';
import fetchFactory from './fetchfactory.js';

export default async function SendFetch(value) {
    let result;
    let url = `https://newsapi.org/v2/top-headlines?` +
        `sources=${value}&` +
        `apiKey=${constants.APIKEY}`;
    // let options = fetchFactory(METHODS.GET);

    return fetch(url)//, options)
        .then((response) => {
            result = response.json();
            return result;
        })
        .then((result) => {
            if (result.status === constants.STATUS.ERROR) {
                throw new Error(response.message);
            }
            return result.articles;
        })
        .catch((error) => {
            throw error;
        })
};