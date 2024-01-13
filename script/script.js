// Warte 7 Sekunden (7000 Millisekunden) und füge dann die Klasse 'show' hinzu
setTimeout(function() {
    var textWrapper = document.querySelector('.text-wrapper');
    textWrapper.classList.add('show');
}, 7000);





var i = 0;
var texts = ['Huch, du scheinst dich verlaufen zu haben.', 'Ich helfe dir, deinen Weg zu finden.', 'Komm mit ...'];
var speed = 50;
var currentIndex = 0;

function typeWriter() {
    if (i < texts[currentIndex].length) {
        document.getElementById("text-1").innerHTML += texts[currentIndex].charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else if (currentIndex < texts.length - 1) {
        // Warte 2000 Millisekunden (2 Sekunden) und rufe dann die Funktion mit dem neuen Text auf
        setTimeout(function () {
            i = 0; // Setze den Zähler zurück
            currentIndex++; // Wechsle zum nächsten Text
            document.getElementById("text-1").innerHTML = ''; // Leere den aktuellen Text
            typeWriter(); // Starte die Funktion erneut für den neuen Text
        }, 2000);
    } else {
        // Wenn der letzte Text geschrieben wurde, höre auf und beende die Funktion
        return;
    }
}

typeWriter(); // Starte die Funktion beim Laden der Seite
