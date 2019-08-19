import formular from './formular'
import list from './list';

const $button = document.querySelector('.button');
const $Search = document.querySelector('.search');

class sites {
    constructor() {
        this._eventlistner();
        this._fetchUrl('love');
    }

    _eventlistner() {
        $button.addEventListener('click', () => new formular()._getFormularData());
        $Search.addEventListener('keyup', () => new list()._fetchUrl($Search.value));
    }

}

export default sites;