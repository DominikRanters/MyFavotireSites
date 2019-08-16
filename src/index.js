import './app.scss'

const $list = document.querySelector('.sitesList');
const $button = document.querySelector('.button');
const $Name = document.querySelector('.formularLine1');
const $Url = document.querySelector('.formularLine2');
const $eMail = document.querySelector('.formularLine3');
const $Kommentar = document.querySelector('.formularLine4');
const $Search = document.querySelector('.search');

let url;

class Tapproject {
    constructor() {


        this._eventlistner();
        this._fetchUrl('love');


    }

    _fetchUrl(searchValue) {

        if ($list.childElementCount > 0) {
            while ($list.firstChild) {
                $list.removeChild($list.firstChild);
            }
        }

        url = 'https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=' + searchValue + '&Skip=0&Take=50'

        fetch(url)
            .then(function(response) {
                return response.json()
            }).then(function(json) {

                const jsonData = json.Data;

                for (let i = 0; i < jsonData.length; i++) {

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

                    listItemImage.style.backgroundImage = 'url(https://chayns.tobit.com/storage/' + jsonData[i].siteId + '/Images/icon-72.png)';
                    let listItemTitleNode = document.createTextNode(jsonData[i].appstoreName);

                    listItemTitle.appendChild(listItemTitleNode);
                    listItemTitles.appendChild(listItemTitle);
                    listItemHeader.appendChild(listItemImage);
                    listItemHeader.appendChild(listItemTitles);
                    listItem.appendChild(listItemHeader);
                    $list.appendChild(listItem);
                }

            }).catch(function(ex) {
                console.log('parsing failed', ex)
            })
    }

    _eventlistner() {
        $button.addEventListener('click', this._getFormularData);
        $Search.addEventListener('keypress', (e) => {
            var key = e.which || e.keyCode;
            if (key === 13) {
                this._fetchUrl($Search.value);
            }
        });
    }

    _getFormularData() {

        chayns.intercom.sendMessageToPage({
            text: 'Hier ist meine Seite! Name: ' + $Name.value + '. Url: ' + $Url.value + '. eMail: ' + $eMail.value + '. Kommentar: ' + $Kommentar.value + '.'
        }).then(function(data) {
            if (data.status == 200) {
                $Name.value = '';
                $Url.value = '';
                $eMail.value = '';
                $Kommentar.value = '';
                chayns.dialog.alert('', 'thank you');
            }
        });
    }
}

chayns.ready.then(() => {
    chayns.ui.initAll();
    new Tapproject();
}).catch((error) => console.log("No Chayns", error))