import constants from './constants.js';

export default async function SendFetch(value) {
    let result;
    let url = `https://newsapi.org/v2/top-headlines?` +
        `sources=${value}&` +
        `apiKey=${constants.APIKEY}`;

    return fetch(url)
        .then((response) => {
            result = response.json();
            return result;
        })
        .then((result) => {
            return result.articles
        })
        .catch((error) => {
            return error;
        });
};
