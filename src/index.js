import './app.scss'

class Tapproject {
    constructor() {
        fetch('https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=love&Skip=0&Take=50')
            .then(function(response) {
                return response.json()
            }).then(function(json) {


                const jsonData = json.Data;
                let sitesList = '';

                console.log('parsed json', json.Data)

                for (let i = 0; i < data.length; i++) {
                    sitesList +=
                        '<div class="list-item list-item--clickable">' +
                        '<div class="list-item__header">' +
                        '<div class="list-item__image" style="background-image: url(&quot;https://chayns.tobit.com/storage/' + jsonData.siteId + '/Images/icon-72.png&quot;);"></div>' +
                        '<div class="list-item__titles">' +
                        '<div class="list-item__title ellipsis">' + jsonData.appstoreName + '</div>' +
                        '</div>' +
                        '<div class="list-item__spacer"></div>' +
                        '</div>' +
                        '</div>'


                    console.log(data[i].siteId);
                }

            }).catch(function(ex) {
                console.log('parsing failed', ex)
            })
    }


}

chayns.ready.then(() => {
    chayns.ui.initAll();
    new Tapproject();
}).catch((error) => console.log("No Chayns", error));