// Text von Firefly
setTimeout(function () {
    let textWrapper = document.querySelector('.t-w-5');

    setTimeout(function () {
        textWrapper.classList.remove('hide');
        textWrapper.classList.add('show');

        setTimeout(function () {
            let i = 0;
            let texts = [
                'Schade, du hast es leider nicht geschafft.',
                'Versuch es doch noch einmal.',
            ];

            let speed = 50;
            let currentIndex = 0;

            function typeWriter() {
                if (i < texts[currentIndex].length) {
                    document.getElementById("text-5").innerHTML += texts[currentIndex].charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                } else if (currentIndex < texts.length - 1) {
                    setTimeout(function () {
                        i = 0;
                        currentIndex++;
                        document.getElementById("text-5").innerHTML = '';
                        typeWriter();
                    }, 2000);
                } else {
                    setTimeout(function () {
                        textWrapper.classList.remove('show');
                        textWrapper.classList.add('hide');
                    }, 3000);
                }
            }

            typeWriter();
        }, 3000);
    }, 5000);
}, 7000);

// Einblenden des Buttons für einen neuen Versuch
setTimeout(function () {
    let btnWrapper = document.querySelector('.new-try');
    setTimeout(function () {
        btnWrapper.classList.remove('hide');
        btnWrapper.classList.add('show');
    }, 5000);
}, 20000); // anpassen

// Hinzufügen: Funktion, dass Button erst nach 20s klickbar ist

function redirectToCategories2() {
    window.location.href = 'Kategorien_2.html';
}