// Einblenden des Eingabefelds einer Botschaft
setTimeout(function () {
    console.log("ich bin message");
    let btnWrapper = document.querySelector('.message-wrapper');
    setTimeout(function () {
        btnWrapper.classList.remove('hide');
        btnWrapper.classList.add('show');
    }, 100); // 5s
}, 100); // 5s

// Einblenden des Buttons
setTimeout(function () {
    let btnWrapper = document.querySelector('.btn-wrapper');
    setTimeout(function () {
        btnWrapper.classList.remove('hide');
        btnWrapper.classList.add('show');
    }, 100);
}, 100);

const textarea = document.getElementById('botschaft');
const absendenButton = document.getElementById('sendButton');

textarea.addEventListener('input', () => {
    if (textarea.value.length > 0) {
        absendenButton.disabled = false;
    } else {
        absendenButton.disabled = true;
    }
});

// Botschaft abschicken
let sendButton = document.getElementById("sendButton");

function eraseText() {
    document.getElementById("botschaft").value = "";
    document.getElementById("botschaft").ariaPlaceholder = "Gib hier deine Botschaft ein (maximal 300 Zeichen)";
}

sendButton.addEventListener('click', () => {
    if (absendenButton.disabled = true & textarea.value.length > 0) {
        eraseText();
        setTimeout(function () {
            hideMessageAndButton();
        }, 5000);
    }
});

// Wenn Botschaft abgeschickt -> Message + Button ausblenden
function hideMessageAndButton() {
    let messageWrapper = document.querySelector('.message-wrapper');
    let btnWrapper = document.querySelector('.btn-wrapper');

    messageWrapper.classList.remove('show');
    messageWrapper.classList.add('hide');

    btnWrapper.classList.remove('show');
    btnWrapper.classList.add('hide');
}


// setTimeout(function () {
//     let textWrapper = document.querySelector('.t-w-4');

//     setTimeout(function () {
//         textWrapper.classList.remove('hide');
//         textWrapper.classList.add('show');

//         setTimeout(function () {
//             let i = 0;
//             let texts = [
//                 'Sieh dir an, welche Botschaft fuer dich bereit steht.',
//             ];

//             let speed = 50;
//             let currentIndex = 0;

//             function typeWriter() {
//                 if (i < texts[currentIndex].length) {
//                     document.getElementById("text-4").innerHTML += texts[currentIndex].charAt(i);
//                     i++;
//                     setTimeout(typeWriter, speed);
//                 } else if (currentIndex < texts.length - 1) {
//                     setTimeout(function () {
//                         i = 0;
//                         currentIndex++;
//                         document.getElementById("text-4").innerHTML = '';
//                         typeWriter();
//                     }, 2000);
//                 } else {
//                     setTimeout(function () {
//                         textWrapper.classList.remove('show');
//                         textWrapper.classList.add('hide');
//                     }, 3000);
//                 }
//             }

//             typeWriter();
//         }, 3000);
//     }, 5000);
// }, 7000);