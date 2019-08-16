import './app.scss'

class Tapproject {
    constructor() {
        fetch('https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=love&Skip=0&Take=50')
            .then(function(response) {
                return response.json()
            }).then(function(json) {
                console.log('parsed json', json)
                this._getData(json);
            }).catch(function(ex) {
                console.log('parsing failed', ex)
            })
    }

    _getData(json) {
        for (let i = 0; i < json.Data.Length; i++) {
            console.log(i);
        }
    }


}

chayns.ready.then(() => {
    chayns.ui.initAll();
    new Tapproject();
}).catch((error) => console.log("No Chayns", error));