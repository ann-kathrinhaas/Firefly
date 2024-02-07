// Einblenden des Eingabefelds einer Botschaft
setTimeout(function () {
    console.log("ich bin message");
    let btnWrapper = document.querySelector('.message-wrapper');
    setTimeout(function () {
        btnWrapper.classList.remove('hide');
        btnWrapper.classList.add('show');
    }, 100);
}, 100); 

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