let gameInProgress = true;
let hangmanImageIndex = 0;

// Vordefinierte Sätze, die der Spieler erraten kann
const sentencesToGuess = [
    "Das ist ein einfacher Satz",
    "Programmieren macht Spaß",
    "OpenAI ist großartig",
    "Javascript ist eine Programmiersprache",
    "Hangman ist ein lustiges Spiel",
    "Computer sind leistungsstark",
    "Ich liebe das Programmieren",
    "Spiele machen Freude",
    "Wörter raten ist herausfordernd",
    "Entwicklung ist kreativ"
];

// Zufällig einen Satz auswählen
const randomIndex = Math.floor(Math.random() * sentencesToGuess.length);
const sentenceToGuess = sentencesToGuess[randomIndex].toUpperCase();
const sentenceArray = sentenceToGuess.split('');
const guessedSentence = sentenceArray.map(char => (char === ' ' ? ' ' : '_'));
const incorrectLetters = []; // Falsch ausgewählte Buchstaben
const correctLetters = []; // Richtige Buchstaben
let remainingTries = 4; // Gesamtzahl der Versuche

const wordElement = document.getElementById('word');
const row1Element = document.getElementById('row1');
const row2Element = document.getElementById('row2');
const row3Element = document.getElementById('row3');
const remainingTriesElement = document.getElementById('remaining-tries');
const hangmanImage = document.getElementById('hangman-image');
const newGameButton = document.getElementById('new-game-button');
const tryAgainText = document.getElementById('try-again-text');
const letters = document.getElementById('letters');

function updateWordDisplay() {
    wordElement.innerHTML = guessedSentence.map(char => (char === ' ' ? '&nbsp;' : char)).join(' ');
}

function checkLetter(letter) {
    if (!gameInProgress) return;

    if (guessedSentence.includes(letter) || incorrectLetters.includes(letter) || correctLetters.includes(letter)) {
        return; // Buchstabe wurde bereits ausgewählt
    }

    const letterIndices = [];
    let letterFound = false;
    for (let i = 0; i < sentenceArray.length; i++) {
        if (sentenceArray[i] === letter) {
            letterIndices.push(i);
            letterFound = true;
        }
    }

    if (letterFound) {
        letterIndices.forEach(index => {
            guessedSentence[index] = letter;
        });

        updateWordDisplay();
        correctLetters.push(letter);
        markCorrectLetter(letter);
        if (!guessedSentence.includes('_')) {
            gameInProgress = false;
            // newGameButton.style.display = 'block';
            tryAgainText.style.display = 'none';
            // alert('Gewonnen! Der Satz lautet: ' + sentenceToGuess)

            setTimeout(function () {
                window.location.href = "Botschaften.html";
            }, 3000);
        }
    } else {
        incorrectLetters.push(letter);
        markIncorrectLetter(letter);
        remainingTries--;
        remainingTriesElement.textContent = 'Versuche übrig: ' + remainingTries;
        if (remainingTries === 0) {
            gameInProgress = false;
            // newGameButton.style.display = 'block';
            // tryAgainText.style.display = 'block';
            hangmanImage.style.display = 'block';
            wordElement.style.display = 'none';
            letters.style.opacity =  0;
            //alert('Verloren! Der Satz lautet: ' + sentenceToGuess);
            setTimeout(function () {
                hangmanImage.style.display = 'none'; // Fade hinzufügen
            }, 1000);

            setTimeout(function () {
                window.location.href = "../content/Game_Over.html";
            }, 3000);
        }
    }
}

function markIncorrectLetter(letter) {
    const letterButtons = document.querySelectorAll('.letter');
    letterButtons.forEach(button => {
        if (button.textContent === letter) {
            button.classList.add('used');
        }
    });

    if (!sentenceArray.includes(letter)) {
        hangmanImageIndex++; // Erhöhe den Index bei einem Fehlversuch
        const maxImageIndex = 4; // Ändern Sie dies entsprechend der Anzahl Ihrer Hangman-Bilder
        if (hangmanImageIndex <= maxImageIndex) {
            hangmanImage.src = `../../img/hangman-orange/hangman${hangmanImageIndex}.png`;
        }
    }

    if (remainingTries <= 0) { // Prüfen, ob alle Versuche aufgebraucht sind
        console.log("ich starte");
        gameInProgress = false;
        newGameButton.style.display = 'block'; // Zeigen Sie den Neustart-Button an
        tryAgainText.style.display = 'block';
        hangmanImage.src = `../../img/hangman-orange/hangman${hangmanImageIndex}.png`; // Aktualisieren des Bilds auf das letzte Hangman-Bild
        // alert('Verloren! Der Satz lautet: ' + sentenceToGuess); // Wir haben die alert-Funktion auskommentiert, da wir den Neustart-Button verwenden
    }
}

function markCorrectLetter(letter) {
    const letterButtons = document.querySelectorAll('.letter');
    letterButtons.forEach(button => {
        if (button.textContent === letter) {
            button.classList.add('used');
        }
    });
}

function createLetterButton(letter) {
    const button = document.createElement('button');
    button.textContent = letter;
    button.className = 'letter';
    button.addEventListener('click', () => {
        checkLetter(letter);
    });
    return button;
}

const row1Letters = 'ABCDEFG';
const row2Letters = 'HIJKLMNOP';
const row3Letters = 'QRSTUVWXYZ';

for (let i = 0; i < row1Letters.length; i++) {
    const letter = row1Letters[i];
    row1Element.appendChild(createLetterButton(letter));
}

for (let i = 0; i < row2Letters.length; i++) {
    const letter = row2Letters[i];
    row2Element.appendChild(createLetterButton(letter));
}

for (let i = 0; i < row3Letters.length; i++) {
    const letter = row3Letters[i];
    row3Element.appendChild(createLetterButton(letter));
}

newGameButton.addEventListener('click', () => {
    // location.reload(); // Lädt die Seite neu, um ein neues Spiel zu starten
    window.location.href = 'Kategorien.html'; // hier noch die Anfangsanimation anpassen
});

updateWordDisplay();




// Richtig erraten -> Botschaften verfassen

// setTimeout(function () { // Geht nicht
//     let textWrapper = document.querySelector('.t-w-4');

//     setTimeout(function () {
//         textWrapper.classList.remove('hide');
//         textWrapper.classList.add('show');

//         setTimeout(function () {
//             let i = 0;
//             let texts = [
//                 'Du hast den Weg gefunden.',
//                 'jetzt kannst auch du ein licht fuer jemanden dalassen.',
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

//  Text, wenn man es nicht geschafft hat
// function displayTextGameOver (){
//     setTimeout(function () {
//         let textWrapper = document.querySelector('.t-w-5');
    
//         setTimeout(function () {
//             textWrapper.classList.remove('hide');
//             textWrapper.classList.add('show');
    
//             setTimeout(function () {
//                 let i = 0;
//                 let texts = [
//                     'Schade, du hast es leider nicht geschafft.',
//                     'Versuch es doch noch einmal.',
//                 ];
    
//                 let speed = 50;
//                 let currentIndex = 0;
    
//                 function typeWriter() {
//                     if (i < texts[currentIndex].length) {
//                         document.getElementById("text-5").innerHTML += texts[currentIndex].charAt(i);
//                         i++;
//                         setTimeout(typeWriter, speed);
//                     } else if (currentIndex < texts.length - 1) {
//                         setTimeout(function () {
//                             i = 0;
//                             currentIndex++;
//                             document.getElementById("text-5").innerHTML = '';
//                             typeWriter();
//                         }, 2000);
//                     } else {
//                         setTimeout(function () {
//                             textWrapper.classList.remove('show');
//                             textWrapper.classList.add('hide');
//                         }, 3000);
//                     }
//                 }
    
//                 typeWriter();
//             }, 3000);
//         }, 5000);
//     }, 7000);
// }



// setTimeout(function () {
//     let messageWrapper = document.querySelector('.message-wrapper');
//     setTimeout(function () {
//         messageWrapper.classList.remove('hide');
//         messageWrapper.classList.add('show');
//     }, 5000);
// }, 7000);