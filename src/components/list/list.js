const $list = document.querySelector('.sitesList');
let url;

class list {

    _fetchUrl(searchValue) {

        url = `https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=${searchValue}&Skip=0&Take=50`

        fetch(url)
            .then((response) => {
                return response.json();
            }).then((json) => {
                this._fillSiteList(json.Data);
            }).catch((ex) => {
                console.log(`Eroor`, ex)
            })
    }

    _fillSiteList(allData) {

        if (allData.length !== $list.childElementCount || allData.length === 50) {

            if ($list.childElementCount > 0) {
                while ($list.firstChild) {
                    $list.removeChild($list.firstChild);
                }
            }

            for (let data of allData) {

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

                listItemImage.style.backgroundImage = `url(https://chayns.tobit.com/storage/${data.siteId}/Images/icon-72.png)`;


                let listItemTitleNode = document.createTextNode(data.appstoreName);

                listItemTitle.appendChild(listItemTitleNode);
                listItemTitles.appendChild(listItemTitle);
                listItemHeader.appendChild(listItemImage);
                listItemHeader.appendChild(listItemTitles);
                listItem.appendChild(listItemHeader);
                $list.appendChild(listItem);

                listItem.addEventListener("click", () => chayns.openUrlInBrowser(`http://chayns.net/${data.siteId}/`));
            }
        }
    }
}

export default list;