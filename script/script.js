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
        setTimeout(function () {
            i = 0;
            currentIndex++;
            document.getElementById("text-1").innerHTML = '';
            typeWriter();
        }, 2000);
    } else {
        return;
    }
}

typeWriter();