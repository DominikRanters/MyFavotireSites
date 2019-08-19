import './app.scss'
import form from './components/form/form'
import fomrText from './components/form/text'
import list from './components/list/list'
import listText from './components/list/text'

chayns.ready.then(() => {
    chayns.ui.initAll();
    "use strict"
    new sites();
}).catch((error) => console.log("No Chayns", error))



class sites {
    constructor() {
        this._eventlistner();
        new list()._fetchUrl('love');
    }

    _eventlistner() {
        fomrText.$button.addEventListener('click', () => new form()._getFormularData());
        listText.$Search.addEventListener('keyup', () => {
            clearTimeout(this.timeout);

            this.timeout = setTimeout(() => {
                chayns.showWaitCursor()
                new list()._fetchUrl(listText.$Search.value);
            }, 1000);

        });
    }
}