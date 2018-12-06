import constants from '../constants';

export default function fetchFactory(type, body){
    switch(type) {
        case constants.METHODS.GET: return {
            method: constants.METHODS.GET
        };
        case constants.METHODS.POST: return {
            method: constants.METHODS.POST,
            header: new Headers(),
            body: body
        };
        case constants.METHODS.PUT: return {
            method: constants.METHODS.PUT
        };
    }
}