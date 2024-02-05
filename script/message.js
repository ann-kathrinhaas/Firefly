// Videos von Firefly abspielen
function playNextVideo() {
    document.getElementById('videoPlayer').src = '../../videos/Szene_2/Szene2_02.webm';
    document.getElementById('videoPlayer').play();
}

function playNextVideo() {
    const videoSources = [
        "../../videos/Szene_2/Szene2_02.webm"
    ];

    const videoPlayer = document.getElementById('videoPlayer');
    const currentVideoIndex = videoSources.indexOf(videoPlayer.src);

    const nextVideoIndex = (currentVideoIndex + 1) % videoSources.length;
    const nextVideoSource = videoSources[nextVideoIndex];

    videoPlayer.src = nextVideoSource;
    videoPlayer.play();
}

// Text von Firefly
setTimeout(function () {
    let textWrapper = document.querySelector('.t-w-4');

    setTimeout(function () {
        textWrapper.classList.remove('hide');
        textWrapper.classList.add('show');

        setTimeout(function () {
            let i = 0;
            let texts = [
                'Du hast den Weg gefunden.',
                'Jetzt kannst auch du ein licht fuer jemanden dalassen.',
            ];

            let speed = 50;
            let currentIndex = 0;

            function typeWriter() {
                if (i < texts[currentIndex].length) {
                    document.getElementById("text-4").innerHTML += texts[currentIndex].charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                } else if (currentIndex < texts.length - 1) {
                    setTimeout(function () {
                        i = 0;
                        currentIndex++;
                        document.getElementById("text-4").innerHTML = '';
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

// Einblenden des Eingabefelds einer Botschaft
setTimeout(function () {
    let btnWrapper = document.querySelector('.message-wrapper');
    setTimeout(function () {
        btnWrapper.classList.remove('hide');
        btnWrapper.classList.add('show');
    }, 5000);
}, 22000); // 22s

// Einblenden des Buttons
setTimeout(function () {
    let btnWrapper = document.querySelector('.btn-wrapper');
    setTimeout(function () {
        btnWrapper.classList.remove('hide');
        btnWrapper.classList.add('show');
    }, 5000);
}, 30000);

// Botschaft abschicken
let sendButton = document.getElementById("sendButton");

function eraseText() {
    document.getElementById("botschaft").value = "";
    document.getElementById("botschaft").ariaPlaceholder = "Gib hier deine Botschaft ein (maximal 300 Zeichen)";
}

// let message = document.getElementsByClassName('message-wrapper');
// let button = document.getElementsByClassName('btn-wrapper');

// message.style.display = 'none';
// button.style.display = 'none';

sendButton.addEventListener('click', () => {
    eraseText();
    hideMessageAndButton(); 
    // location.reload(); // Lädt die Seite neu, um ein neues Spiel zu starten
});

// Wenn Botschaft abgeschickt -> Message + Button ausblenden und nächste Aniamtion starten
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