import '../styles/reset.css';
import '../styles/style.scss';
import insertHeader from './modules/insertheader';
import constants from './modules/constants';
import jsonFile from './jsonFile.json';

console.log(jsonFile);

constants.FORM.onsubmit = searchAndLoadBundle;

function searchAndLoadBundle(event) {
    let value;

    if(event) {
        event.preventDefault();
    }

    value = this['0'].value;

    import('./modules/getElements').then((module) => {
        module.default(value);
    })
}