// Übergang zur Seite
document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.remove('fade-out');
    document.body.style.opacity = 1;
});

let gameInProgress = true;
let hangmanImageIndex = 0;

// Vordefinierte Sätze, die der Spieler erraten kann
const sentencesToGuess = [
    "Erfolg ist die Summe kleiner Anstrengungen, die jeden Tag unternommen werden.",
    "Der Weg zum Erfolg beginnt damit, den ersten Schritt zu tun.",
    "Du musst das Unmoegliche versuchen, um das Moegliche zu erreichen.",
    "Erfolg ist keine Glueckssache, sondern das Ergebnis harter Arbeit und Ausdauer.",
    "Die Motivation kommt oft erst, wenn du die ersten Schritte unternimmst.",
    "Man ist nie zu klein, um großartig zu sein.",
    "Motivation ist das, was dich starten laesst. Gewohnheit ist, was dich am Ball haelt.",
    "Die groesste Motivation kommt aus dem Inneren. Finde deine Leidenschaft und lass sie dich antreiben.",
    "Gib niemals auf. Erfolg beginnt im Kopf.",
];

// Zufällig einen Satz auswählen
const randomIndex = Math.floor(Math.random() * sentencesToGuess.length);
const sentenceToGuess = sentencesToGuess[randomIndex].toUpperCase();
const sentenceArray = sentenceToGuess.split('');
// const guessedSentence = sentenceArray.map(char => (char === ' ' ? ' ' : '_'));
const guessedSentence = sentenceArray.map(char => (char === ' ' ? ' ' : '_'));
for (let i = 0; i < guessedSentence.length; i++) { // Fügt . und , schon ein
    if (/[.,]/.test(sentenceArray[i])) {
        guessedSentence[i] = sentenceArray[i];
    }
}
const incorrectLetters = []; // Falsch ausgewählte Buchstaben
const correctLetters = []; // Richtige Buchstaben
let remainingTries = 4; // Gesamtzahl der Versuche
3
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

// Zeigt nach richtigem Erraten den Satz nochmal komplett an
function displayFullSentence() {
    const flexContainer = document.querySelector('.flex-container');
    flexContainer.style.display = 'none';

    const wordDiv = document.getElementById('word');
    wordDiv.style.transition = 'text-shadow 2s ease-in-out, opacity 1s ease-in-out';
    wordDiv.style.textShadow = '0 0 30px rgba(255, 255, 255, 1)';
    wordDiv.style.opacity = 1;
}

// Blendet den kompletten Satz wieder aus
function hideFullSentence() {
    const wordDiv = document.getElementById('word');
    wordDiv.style.transition = 'text-shadow 2s ease-in-out, opacity 1s ease-in-out';
    wordDiv.style.textShadow = '0 0 30px rgba(255, 255, 255, 1)';
    wordDiv.style.opacity = 0;
}

function playNextVideo() {
    videoPlayer.src = '../../videos/Ende/Happy_KurzFireflySlow.webm';

    videoPlayer.addEventListener('ended', function () { // Wenn das erste Video zu Ende ist, wird das zweite geladen
        videoPlayer.src = '../../videos/Botschaften/White/LinkesFirefly_Wiggle_Lastscene.webm';

        videoPlayer.addEventListener('loadeddata', function () {
            videoPlayer.play(); // Zweites Video abspielen
        });
    });

    videoPlayer.play(); // Erstes Video abspielen
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
            tryAgainText.style.display = 'none';

            const videoPlayer = document.getElementById('videoPlayer');

            setTimeout(function () {
                displayFullSentence(); // Zeigt den erratenen Satz nochmal an
                playNextVideo();

                // Text-wrapper erstellen
                let textWrapper = document.createElement('div');
                textWrapper.classList.add('text-wrapper', 't-w-4', 'hide');

                let paragraph = document.createElement('p');
                paragraph.id = 'text-4';

                textWrapper.appendChild(paragraph);

                document.body.appendChild(textWrapper);

                setTimeout(function () {
                    let textWrapper = document.querySelector('.t-w-4');

                    setTimeout(function () {
                        textWrapper.classList.remove('hide');
                        textWrapper.classList.add('show');

                        setTimeout(function () {
                            let i = 0;
                            let texts = [
                                'Du hast den Weg gefunden.',
                                'Jetzt kannst auch du ein Licht fuer jemanden dalassen.',
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
                                        hideFullSentence();

                                        let videoPlayer = document.getElementById('videoPlayer'); // Wiggle Video ausblenden
                                        if (videoPlayer) {
                                            videoPlayer.parentNode.removeChild(videoPlayer);
                                        }

                                        // Video für Rausfliegen
                                        let videoPlayer3 = document.createElement('video');
                                        videoPlayer3.id = 'videoPlayer3';
                                        videoPlayer3.autoplay = true;
                                        videoPlayer3.muted = true;

                                        let source3 = document.createElement('source');
                                        source3.src = '../../videos/Ende/LinkesFirefly_3Path_Lastscene.webm'; // Passe den Pfad entsprechend an
                                        source3.type = 'video/webm';

                                        videoPlayer3.appendChild(source3);

                                        document.body.appendChild(videoPlayer3);

                                        videoPlayer3.addEventListener('ended', function() { // Wenn Firefly rausgeflogen ist -> Weiterleitung zu Botschaften
                                            // window.location.href = "Botschaften.html";
                                            setTimeout(function () {
                                                window.location.href = "Botschaften.html";
                                            }, 3000);
                                        });

                                    }, 3000);
                                }
                            }

                            typeWriter();
                        }, 3000);
                    }, 5000);
                }, 7000);

        
            }, 2000);
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
            letters.style.opacity = 0;
            //alert('Verloren! Der Satz lautet: ' + sentenceToGuess);
            setTimeout(function () {
                hangmanImage.style.display = 'none'; // Fade hinzufügen
                tryAgainText.style.display = 'block';
            }, 1000);

            setTimeout(function () {
                window.location.href = "/content/Game_Over.html";
            }, 7000);
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

// newGameButton.addEventListener('click', () => {
//     // location.reload(); // Lädt die Seite neu, um ein neues Spiel zu starten
//     window.location.href = 'Kategorien.html'; // hier noch die Anfangsanimation anpassen
// });

updateWordDisplay();