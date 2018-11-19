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
        .catch(() => {
            errorNotification();
        });
};

function errorNotification() {
    constants.ERRORWINDOW.classList.add('show');
}