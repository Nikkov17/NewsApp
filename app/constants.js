const APIKEY = 'b1489445b9fb4d2b98dbf211c114989b';
const NEWSCONTAINER = document.querySelector('.news-container');
const FORM = document.querySelector('.form');
const ERRORWINDOW = document.querySelector('.error-notification');
const METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
};
const STATUS = {
    ERROR: 'error',
    SUCCESS: 'ok',
}

export default {APIKEY, NEWSCONTAINER, FORM, ERRORWINDOW, METHODS, STATUS};