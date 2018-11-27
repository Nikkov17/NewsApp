import '../css/reset.css';
import '../css/style.css';
import 'babel-polyfill';
import 'whatwg-fetch';
import getElements from './getelements';
import jsonFile from '../loaders/jsonFile.json';

document.querySelector('.lazy-load-js-css').classList.add('hidden');

//check my json loader
console.log(jsonFile);
