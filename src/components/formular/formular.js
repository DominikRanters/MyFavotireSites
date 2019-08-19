import formularText from './text'

class formular {

    _getFormularData() {
        if (formularText.$Name.value === formularText.emptyString || formularText.$Url.value === formularText.emptyString || formularText.$eMail.value === formularText.emptyString) {
            chayns.dialog.alert(formularText.emptyString, formularText.fillAllImportent);

        } else if (!formularText.$eMail.value.includes('@')) {
            chayns.dialog.alert(formularText.emptyString, "Die Email exestiert nicht.");

        } else if (!formularText.$Url.value.includes('.')) {
            chayns.dialog.alert(formularText.emptyString, "Keine gültige Url");

        } else if (formularText.$Name.value !== formularText.emptyString && formularText.$Url.value !== formularText.emptyString && formularText.$eMail.value !== formularText.emptyString && formularText.$Kommentar.value !== formularText.emptyString) {
            chayns.intercom.sendMessageToPage({
                text: `Hier ist meine Seite! Name:${formularText.$Name.value}. Url: ${formularText.$Url.value}. eMail: ${formularText.$eMail.value}. Kommentar: ${formularText.$Kommentar.value}.`
            }).then(function(data) {
                if (data.status == 200) {
                    formularText.$Name.value = formularText.emptyString;
                    formularText.$Url.value = formularText.emptyString;
                    formularText.$eMail.value = formularText.emptyString;
                    formularText.$Kommentar.value = formularText.emptyString;
                    chayns.dialog.alert(formularText.emptyString, 'Ihre Seite wird geprüft und anschließend hinzugefügt');
                }
            })

        } else if (formularText.$Name.value !== formularText.emptyString && formularText.$Url.value !== formularText.emptyString && formularText.$eMail.value !== formularText.emptyString) {
            chayns.intercom.sendMessageToPage({
                text: `Hier ist meine Seite! Name:${formularText.$Name.value}. Url: ${formularText.$Url.value}. eMail: ${formularText.$eMail.value}.`
            }).then(function(data) {
                if (data.status == 200) {
                    formularText.$Name.value = formularText.emptyString;
                    formularText.$Url.value = formularText.emptyString;
                    formularText.$eMail.value = formularText.emptyString;
                    chayns.dialog.alert(formularText.emptyString, 'Ihre Seite wird geprüft und anschließend hinzugefügt');
                }
            });
        }
    }
}

export default formular;