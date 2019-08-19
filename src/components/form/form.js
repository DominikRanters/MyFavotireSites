import fomrText from './text'

class form {

    _getFormularData() {
        if (fomrText.$Name.value === fomrText.emptyString || fomrText.$Url.value === fomrText.emptyString || fomrText.$eMail.value === fomrText.emptyString) {
            chayns.dialog.alert(fomrText.emptyString, fomrText.fillAllImportent);

        } else if (!fomrText.$eMail.value.includes('@')) {
            chayns.dialog.alert(fomrText.emptyString, fomrText.invalidEmail);

        } else if (!fomrText.$Url.value.includes('.')) {
            chayns.dialog.alert(fomrText.emptyString, fomrText.invalidUrl);

        } else if (fomrText.$Name.value !== fomrText.emptyString && fomrText.$Url.value !== fomrText.emptyString && fomrText.$eMail.value !== fomrText.emptyString && fomrText.$Kommentar.value !== fomrText.emptyString) {
            chayns.intercom.sendMessageToPage({
                text: `Hier ist meine Seite! Name:${fomrText.$Name.value}. Url: ${fomrText.$Url.value}. eMail: ${fomrText.$eMail.value}. Kommentar: ${fomrText.$Kommentar.value}.`
            }).then(function(data) {
                if (data.status == 200) {
                    fomrText.$Name.value = fomrText.emptyString;
                    fomrText.$Url.value = fomrText.emptyString;
                    fomrText.$eMail.value = fomrText.emptyString;
                    fomrText.$Kommentar.value = fomrText.emptyString;
                    chayns.dialog.alert(fomrText.emptyString, fomrText.sendText);
                }
            })

        } else if (fomrText.$Name.value !== fomrText.emptyString && fomrText.$Url.value !== fomrText.emptyString && fomrText.$eMail.value !== fomrText.emptyString) {
            chayns.intercom.sendMessageToPage({
                text: `Hier ist meine Seite! Name:${fomrText.$Name.value}. Url: ${fomrText.$Url.value}. eMail: ${fomrText.$eMail.value}.`
            }).then(function(data) {
                if (data.status == 200) {
                    fomrText.$Name.value = fomrText.emptyString;
                    fomrText.$Url.value = fomrText.emptyString;
                    fomrText.$eMail.value = fomrText.emptyString;
                    chayns.dialog.alert(fomrText.emptyString, fomrText.sendText);
                }
            });
        }
    }
}

export default form;