import './app.scss'


const $list = document.querySelector('.sitesList');

class Tapproject {
    constructor() {
        fetch('https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=Feuerwehr&Skip=0&Take=50')
            .then(function(response) {
                return response.json()
            }).then(function(json) {


                const jsonData = json.Data;
                let sitesList = '';

                let listItem = document.createElement("div");
                listItem.className = "list-item list-item--clickable";
                let listItemHeader = document.createElement("div");
                listItemHeader.className = 'list-item__header';
                let listItemTitles = document.createElement("div");
                listItemTitles.className = 'list-item__titles';
                let listItemImage = document.createElement('div');
                listItemImage.className = 'list-item__image';
                let listItemTitle = document.createElement('div');
                listItemTitle.className = 'list-item__title ellipsis';

                console.log('parsed json', json.Data)

                for (let i = 0; i < jsonData.length; i++) {

                    //listItemImageStylelistItemImageStyle.style = 'background-image: url(&quot;https://chayns.tobit.com/storage/' + jsonData[i].siteId + '/Images/icon-72.png&quot;)';
                    let listItemTitleNode = document.createTextNode(jsonData[i].appstoreName);
                    listItemTitle.appendChild(listItemTitleNode);

                    $list.appendChild(listItem);
                    listItem.appendChild(listItemHeader);
                    listItemHeader.appendChild(listItemImage);
                    listItemHeader.appendChild(listItemTitles);
                    listItemTitles.appendChild(listItemTitle);
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