import './sub';
import 'js/sub';
import '@scss/app.scss';
import utils from './utils';
// import 'regenerator-runtime';
// import 'core-js';
// import jQuery from "jquery";

const init = async () => {
    console.log('this is a main js file.');
    await asyncFn();
    jQuery();
    utils.log('hello form app.js');
};

async function asyncFn(){
    console.log("I'm async function");
    console.log([1,2,3].includes(0));
}
init();
