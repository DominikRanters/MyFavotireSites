const $Name = document.querySelector('.formularLine1');
const $Url = document.querySelector('.formularLine2');
const $eMail = document.querySelector('.formularLine3');
const $Kommentar = document.querySelector('.formularLine4');

class formular {

    _getFormularData() {
        if ($Name.value === '' || $Url.value === '' || $eMail.value === '') {
            chayns.dialog.alert('', 'Füllen Sie alle Felder mit einem * aus.');

        } else if (!$eMail.value.includes('@')) {
            chayns.dialog.alert('', "Die Email exestiert nicht.");

        } else if (!$Url.value.includes('.')) {
            chayns.dialog.alert('', "Keine gültige Url");

        } else if ($Name.value !== '' && $Url.value !== '' && $eMail.value !== '' && $Kommentar.value !== '') {
            chayns.intercom.sendMessageToPage({
                text: `Hier ist meine Seite! Name:${$Name.value}. Url: ${$Url.value}. eMail: ${$eMail.value}. Kommentar: ${$Kommentar.value}.`
            }).then(function(data) {
                if (data.status == 200) {
                    $Name.value = '';
                    $Url.value = '';
                    $eMail.value = '';
                    $Kommentar.value = '';
                    chayns.dialog.alert('', 'Ihre Seite wird geprüft und anschließend hinzugefügt');
                }
            })

        } else if ($Name.value !== '' && $Url.value !== '' && $eMail.value !== '') {
            chayns.intercom.sendMessageToPage({
                text: `Hier ist meine Seite! Name:${$Name.value}. Url: ${$Url.value}. eMail: ${$eMail.value}.`
            }).then(function(data) {
                if (data.status == 200) {
                    $Name.value = '';
                    $Url.value = '';
                    $eMail.value = '';
                    chayns.dialog.alert('', 'Ihre Seite wird geprüft und anschließend hinzugefügt');
                }
            });
        }
    }
}

export default formular;