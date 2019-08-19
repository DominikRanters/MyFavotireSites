import listText from './text'

class list {

    _fetchUrl(searchValue) {

        let url = `https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=${searchValue}&Skip=0&Take=50`

        fetch(url)
            .then((response) => {
                return response.json();
            }).then((json) => {
                this._fillSiteList(json.Data, json.ResultCode);
            }).catch((ex) => {
                console.log(`Eroor`, ex)
            })
    }

    _fillSiteList(allData, resultCode) {

        if (resultCode === 1 || allData.length !== $list.childElementCount || allData.length === 50) {

            if ($list.childElementCount > 0) {
                while ($list.firstChild) {
                    $list.removeChild($list.firstChild);
                }
            }
            //never Rebase on develop, if you want to keep the feature!!!!
            for (let data of allData) {

                let listItem = document.createElement(listText.div);
                listItem.className = listText.classListItem;
                let listItemHeader = document.createElement(listText.div);
                listItemHeader.className = listText.classItemHeader;
                let listItemTitles = document.createElement(listText.div);
                listItemTitles.className = listText.classItemTitles
                let listItemImage = document.createElement(listText.div);
                listItemImage.className = listText.classItemImage
                let listItemTitle = document.createElement(listText.div);
                listItemTitle.className = listText.classItemTitle

                listItemImage.style.backgroundImage = `url(https://chayns.tobit.com/storage/${data.siteId}/Images/icon-72.png)`;


                let listItemTitleNode = document.createTextNode(data.appstoreName);

                listItemTitle.appendChild(listItemTitleNode);
                listItemTitles.appendChild(listItemTitle);
                listItemHeader.appendChild(listItemImage);
                listItemHeader.appendChild(listItemTitles);
                listItem.appendChild(listItemHeader);
                listText.$list.appendChild(listItem);

                listText.listItem.addEventListener("click", () => chayns.openUrlInBrowser(`http://chayns.net/${data.siteId}/`));
            }
        }
    }
}

export default list;