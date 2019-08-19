import './app.scss'
import sites from `./sites`

chayns.ready.then(() => {
    chayns.ui.initAll();
    "use strict"
    new sites();
}).catch((error) => console.log("No Chayns", error))