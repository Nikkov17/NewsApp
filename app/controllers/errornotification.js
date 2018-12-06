import constants from '../constants';

class ErrorsHandler {
    errorNotification() {
        constants.ERRORWINDOW.innerText = 'Entered news channel nonexistent or unavailable!';
        constants.ERRORWINDOW.classList.add('show');
    };
}

const errorMessage = new ErrorsHandler();

export default errorMessage;