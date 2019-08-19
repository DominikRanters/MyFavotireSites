import './app.scss'
import formular from './components/formular/formular'
import list from './components/list/list'

chayns.ready.then(() => {
    chayns.ui.initAll();
    "use strict"
    new sites();
}).catch((error) => console.log("No Chayns", error))

const $button = document.querySelector('.button');
const $Search = document.querySelector('.search');


class sites {
    constructor() {
        this._eventlistner();
        new list()._fetchUrl('love');
    }

    _eventlistner() {
        $button.addEventListener('click', () => new formular()._getFormularData());
        $Search.addEventListener('keyup', () => new list()._fetchUrl($Search.value));
    }

}