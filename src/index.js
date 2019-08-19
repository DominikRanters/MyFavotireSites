import './app.scss'
import formular from './components/form/form'
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
        $button.addEventListener('click', () => new form()._getFormularData());
        //$Search.addEventListener('keyup', () => new list()._fetchUrl($Search.value));
        $Search.addEventListener('keyup', () => {
            clearTimeout(this.timeout);

            this.timeout = setTimeout(() => {
                chayns.showWaitCursor()
                new list()._fetchUrl($Search.value);
            }, 1000);

        });
    }
}