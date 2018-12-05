import constants from './constants.js';
import fetchFactory from './fetchfactory';

export default async function SendFetch(value) {
    let result;
    const url = `https://newsapi.org/v2/top-headlines?` +
        `sources=${value}&` +
        `apiKey=${constants.APIKEY}`;
    let options = fetchFactory(constants.METHODS.GET);
    const methodHandler = {
        get: function(target, property) {
            let shouldLog = ((property === 'method') ||
            (property === 'body') ||
            (property === 'headers'));

            if (shouldLog) {
                console.log(`${property}: ${target[property]}`);
            }
            return (target.property);
        }
    };
    const proxy = new Proxy(options, methodHandler);

    return fetch(url, proxy)
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