import './sub';
import './app.scss';
// import 'regenerator-runtime';
// import 'core-js';

const init = async () => {
    console.log('this is a main js file.');
    await asyncFn();
}

async function asyncFn(){
    console.log("I'm async function");
    console.log([1,2,3].includes(0));
}
init();
