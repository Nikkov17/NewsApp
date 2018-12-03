import constants from './constants.js';

export default function fetchFactory(type, body){
    const requestObject = {method: type};

    if (type === constants.METHODS.POST) {
        requestObject.header = new Headers();
        requestObject.body = body;
    }

    return requestObject;
} 