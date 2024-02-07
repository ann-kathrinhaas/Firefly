// Text von Firefly
setTimeout(function () {
    let textWrapper = document.querySelector('.t-w-1');

    setTimeout(function () {
        textWrapper.classList.remove('hide');
        textWrapper.classList.add('show');

        setTimeout(function () {
            let i = 0;
            let texts = [
                'Huch, wer bist du denn?',
                'Sieht so aus, als haettest du dich verlaufen.',
                'Lass mich dir helfen, deinen Weg zu finden.',
                'Komm mit ...'
            ];

            let speed = 50;
            let currentIndex = 0;

            function typeWriter() {
                if (i < texts[currentIndex].length) {
                    document.getElementById("text-1").innerHTML += texts[currentIndex].charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                } else if (currentIndex < texts.length - 1) {
                    setTimeout(function () {
                        i = 0;
                        currentIndex++;
                        document.getElementById("text-1").innerHTML = '';
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

// Einblenden des Buttons
setTimeout(function () {
    let btnWrapper = document.querySelector('.btn-wrapper');
    setTimeout(function () {
        btnWrapper.classList.remove('hide');
        btnWrapper.classList.add('show');
    }, 5000);
}, 30000);

// Weiterleitung zu den Kategorien
function redirectToCategories() {
    window.location.href = 'Kategorien.html';
}