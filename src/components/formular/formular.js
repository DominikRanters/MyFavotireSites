import formularText from './text'

class formular {

    _getFormularData() {
        if (formularText.$Name.value === formularText.emptyString || formularText.$Url.value === formularText.emptyString || formularText.$eMail.value === formularText.emptyString) {
            chayns.dialog.alert(formularText.emptyString, formularText.fillAllImportent);

        } else if (!formularText.$eMail.value.includes('@')) {
            chayns.dialog.alert(formularText.emptyString, formularText.invalidEmail);

        } else if (!formularText.$Url.value.includes('.')) {
            chayns.dialog.alert(formularText.emptyString, formularText.invalidUrl);

        } else if (formularText.$Name.value !== formularText.emptyString && formularText.$Url.value !== formularText.emptyString && formularText.$eMail.value !== formularText.emptyString && formularText.$Kommentar.value !== formularText.emptyString) {
            chayns.intercom.sendMessageToPage({
                text: `Hier ist meine Seite! Name:${formularText.$Name.value}. Url: ${formularText.$Url.value}. eMail: ${formularText.$eMail.value}. Kommentar: ${formularText.$Kommentar.value}.`
            }).then(function(data) {
                if (data.status == 200) {
                    formularText.$Name.value = formularText.emptyString;
                    formularText.$Url.value = formularText.emptyString;
                    formularText.$eMail.value = formularText.emptyString;
                    formularText.$Kommentar.value = formularText.emptyString;
                    chayns.dialog.alert(formularText.emptyString, formularText.sendText);
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
                    chayns.dialog.alert(formularText.emptyString, formularText.sendText);
                }
            });
        }
    }
}

export default formular;