setTimeout(function() {
    var textWrapper = document.querySelector('.t-w-1');
    
    setTimeout(function() {
        textWrapper.classList.remove('hide');
        textWrapper.classList.add('show');
        
        setTimeout(function() {
            var i = 0;
            var texts = [
                'Huch, wer bist du denn?', 
                'Sieht so aus, als haettest du dich verlaufen.', 
                'Lass mich dir helfen, deinen Weg zu finden.', 
                'Komm mit ...'
            ];

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
                    setTimeout(function() {
                        textWrapper.classList.remove('show');
                        textWrapper.classList.add('hide');
                    }, 3000);
                }
            }

            typeWriter();
        }, 3000);
    }, 5000);
}, 7000);


setTimeout(function() {
    var btnWrapper = document.querySelector('.btn-wrapper');
    setTimeout(function() {
        btnWrapper.classList.remove('hide');
        btnWrapper.classList.add('show');
    }, 5000);
}, 30000);


function redirectToCategories() {
    window.location.href = 'Kategorien.html';
}


function playNextVideo() {
    document.getElementById('videoPlayer').src = '../videos/Szene_2/Szene2_02.webm';
    document.getElementById('videoPlayer').play();
  }


  function playNextVideo() {
    const videoSources = [
      "../videos/Szene_2/Szene2_02.webm"
    ];

    const videoPlayer = document.getElementById('videoPlayer');
    const currentVideoIndex = videoSources.indexOf(videoPlayer.src);

    const nextVideoIndex = (currentVideoIndex + 1) % videoSources.length;
    const nextVideoSource = videoSources[nextVideoIndex];

    videoPlayer.src = nextVideoSource;
    videoPlayer.play();
  }


setTimeout(function() {
    var textWrapper = document.querySelector('.t-w-2');
    
    setTimeout(function() {
        textWrapper.classList.remove('hide');
        textWrapper.classList.add('show');
        
        setTimeout(function() {
            var i = 0;
            var texts = [
                'Da bist du ja wieder.',
                'Schau mal, hier kannst du einen Pfad aussuchen.', 
                'Welche Richtung moechtest du einschlagen?'
            ];

            var speed = 50;
            var currentIndex = 0;

            function typeWriter() {
                if (i < texts[currentIndex].length) {
                    document.getElementById("text-2").innerHTML += texts[currentIndex].charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                } else if (currentIndex < texts.length - 1) {
                    setTimeout(function () {
                        i = 0;
                        currentIndex++;
                        document.getElementById("text-2").innerHTML = '';
                        typeWriter();
                    }, 2000);
                } else {
                    setTimeout(function() {
                        textWrapper.classList.remove('show');
                        textWrapper.classList.add('hide');
                    }, 3000);
                }
            }

            typeWriter();
        }, 3000);
    }, 5000);
}, 7000);


setTimeout(function() {
    let hoverCategory = document.querySelectorAll('.category');
    
    hoverCategory.forEach(function(element) {
        element.classList.add('active');
    });

    changeSign();
}, 20000);


function changeSign() {
    let sign = document.querySelector('.sign-dark');
    let signOrange = document.querySelector('.sign-orange');
    let signMint = document.querySelector('.sign-mint');
    let signBlue = document.querySelector('.sign-blue');
    let signPink = document.querySelector('.sign-pink');
    let signGreen = document.querySelector('.sign-green');

    let c1 = document.querySelector('.c-1');
    let c2 = document.querySelector('.c-2');
    let c3 = document.querySelector('.c-3');
    let c4 = document.querySelector('.c-4');
    let c5 = document.querySelector('.c-5');

    c1.addEventListener('mouseenter', () => {
        sign.classList.add('hide');
        sign.classList.remove('show');
        signOrange.classList.add('show');
        signOrange.classList.remove('hide');
    });

    c1.addEventListener('mouseleave', () => {
        sign.classList.remove('hide');
        sign.classList.add('show');
        signOrange.classList.add('hide');
        signOrange.classList.remove('show');
    });

    c2.addEventListener('mouseenter', () => {
        sign.classList.add('hide');
        sign.classList.remove('show');
        signMint.classList.add('show');
        signMint.classList.remove('hide');
    });

    c2.addEventListener('mouseleave', () => {
        sign.classList.remove('hide');
        sign.classList.add('show');
        signMint.classList.add('hide');
        signMint.classList.remove('show');
    });

    c3.addEventListener('mouseenter', () => {
        sign.classList.add('hide');
        sign.classList.remove('show');
        signPink.classList.add('show');
        signPink.classList.remove('hide');
    });

    c3.addEventListener('mouseleave', () => {
        sign.classList.remove('hide');
        sign.classList.add('show');
        signPink.classList.add('hide');
        signPink.classList.remove('show');
    });

    c4.addEventListener('mouseenter', () => {
        sign.classList.add('hide');
        sign.classList.remove('show');
        signBlue.classList.add('show');
        signBlue.classList.remove('hide');
    });

    c4.addEventListener('mouseleave', () => {
        sign.classList.remove('hide');
        sign.classList.add('show');
        signBlue.classList.add('hide');
        signBlue.classList.remove('show');
    });

    c5.addEventListener('mouseenter', () => {
        sign.classList.add('hide');
        sign.classList.remove('show');
        signGreen.classList.add('show');
        signGreen.classList.remove('hide');
    });

    c5.addEventListener('mouseleave', () => {
        sign.classList.remove('hide');
        sign.classList.add('show');
        signGreen.classList.add('hide');
        signGreen.classList.remove('show');
    });

}


function redirectToCategory1() {
    setTimeout(function() {
        window.location.href = 'Leuchtkraft_des_Moments.html';
    }, 20000);
}

function redirectToCategory2() {
    setTimeout(function() {
        window.location.href = 'Gluehwuermchen_der_Hoffnung.html';
    }, 20000);
}

function redirectToCategory3() {
    setTimeout(function() {
        window.location.href = 'Strahlen_der_Dankbarkeit.html';
    }, 20000);
}

function redirectToCategory4() {
    setTimeout(function() {
        window.location.href = 'Lichter_des_Lachens.html';
    }, 20000);
}

function redirectToCategory5() {
    setTimeout(function() {
        window.location.href = 'Strahlen_der_Verbundenheit.html';
    }, 20000);
}


setTimeout(function () {
    document.querySelectorAll('.category').forEach(function (category) {
        category.addEventListener('mouseenter', function () {
            let text = getCategoryText(category.classList);
            updateTextWrapper(text);
        });

        category.addEventListener('mouseleave', function () {
            resetTextWrapper();
        });
    });

    changeSign();
}, 20000);


setTimeout(function() {
    let hoverCategory = document.querySelectorAll('.category');
    
    hoverCategory.forEach(function(element) {
        element.classList.add('active');
        element.addEventListener('mouseenter', function() {
            updateTextWrapper(this);
        });
    });

    changeSign();

    function updateTextWrapper(element) {
        var textWrapper = document.querySelector('.t-w-3');
        var textElement = document.getElementById("text-3");
    
        var text = element.dataset.text;
        
        textElement.innerHTML = text;
    
        textWrapper.classList.remove('hide');
        textWrapper.classList.add('show');
    }

}, 20000);


function resetTextWrapper() {
    var textWrapper = document.querySelector('.t-w-3');
    textWrapper.classList.remove('show');
    textWrapper.classList.add('hide');
}


// Hangman game 

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
                    newGameButton.style.display = 'block';
                    tryAgainText.style.display = 'none';
                    alert('Gewonnen! Der Satz lautet: ' + sentenceToGuess);
                }
            } else {
                incorrectLetters.push(letter);
                markIncorrectLetter(letter);
                remainingTries--;
                remainingTriesElement.textContent = 'Versuche übrig: ' + remainingTries;
                if (remainingTries === 0) {
                    gameInProgress = false;
                    newGameButton.style.display = 'block';
                    tryAgainText.style.display = 'block';
                    hangmanImage.style.display = 'block';
                    wordElement.style.display = 'none';
                    letters.style.opacity = 0; // Buchstaben sollen auch ausgeblendet werden
                    //alert('Verloren! Der Satz lautet: ' + sentenceToGuess);
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
                    hangmanImage.src = '../img/hangman${hangmanImageIndex}.png';
                }
            }

            if (remainingTries <= 0) { // Prüfen, ob alle Versuche aufgebraucht sind
                gameInProgress = false;
                newGameButton.style.display = 'block'; // Zeigen Sie den Neustart-Button an
                tryAgainText.style.display = 'block';
                hangmanImage.src = '../img/hangman${maxImageIndex}.png'; // Aktualisieren des Bilds auf das letzte Hangman-Bild
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