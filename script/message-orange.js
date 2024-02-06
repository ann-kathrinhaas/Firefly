// Abspielen der Videos
function playNextVideo6() {
    const videoSources = [
        "../../videos/Botschaften/White/LinkesFirefly_Wiggle_Lastscene.webm"
    ];

    const videoPlayer6 = document.getElementById('videoPlayer6');
    const currentVideoIndex = videoSources.indexOf(videoPlayer6.src);

    const nextVideoIndex = (currentVideoIndex + 1) % videoSources.length;
    const nextVideoSource = videoSources[nextVideoIndex];

    videoPlayer6.src = nextVideoSource;
    videoPlayer6.play();
}

function playNextVideo7() {
    const videoSources = [
        "../../videos/Botschaften/Orange/OrangeIdle.webm"
    ];

    const videoPlayer7 = document.getElementById('videoPlayer7');
    const currentVideoIndex = videoSources.indexOf(videoPlayer7.src);

    const nextVideoIndex = (currentVideoIndex + 1) % videoSources.length;
    const nextVideoSource = videoSources[nextVideoIndex];

    videoPlayer7.src = nextVideoSource;
    videoPlayer7.play();
}

function playNextVideo8() {
    const videoSources = [
        "../../videos/Botschaften/White/LinkesFirefly_2Wiggle_Lastscene.webm"
    ];

    const videoPlayer8 = document.getElementById('videoPlayer8');
    const currentVideoIndex = videoSources.indexOf(videoPlayer8.src);

    const nextVideoIndex = (currentVideoIndex + 1) % videoSources.length;
    const nextVideoSource = videoSources[nextVideoIndex];

    videoPlayer8.src = nextVideoSource;
    videoPlayer8.play();
}


// Text von Firefly
setTimeout(function () {
    let textWrapper = document.querySelector('.t-w-6');

    setTimeout(function () {
        textWrapper.classList.remove('hide');
        textWrapper.classList.add('show');

        setTimeout(function () {
            let i = 0;
            let texts = [
                'Ich wuensche dir alles Gute auf deinem weiteren Weg.',
                'Vielleicht sieht man sich ja mal wieder.',
                'Machs gut ... ?!'
            ];

            let speed = 50;
            let currentIndex = 0;

            function typeWriter() {
                if (i < texts[currentIndex].length) {
                    document.getElementById("text-6").innerHTML += texts[currentIndex].charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                } else if (currentIndex < texts.length - 1) {
                    setTimeout(function () {
                        i = 0;
                        currentIndex++;
                        document.getElementById("text-6").innerHTML = '';
                        typeWriter();
                    }, 2000);
                } else {
                    setTimeout(function () {
                        textWrapper.classList.remove('show');
                        textWrapper.classList.add('hide');

                        // Wenn Text-wrapper ausgeblendet wird, kommt farbiges Firefly eingeflogen
                        setTimeout(function () {
                            // Firefly Anfang wird ausgeblendet
                            let videoPlayer6 = document.getElementById('videoPlayer6');
                            videoPlayer6.style.display = 'none';

                            // Farbiges Firefly fliegt rein
                            let videoPlayer7 = document.getElementById('videoPlayer7');
                            videoPlayer7.style.display = 'block';
                            videoPlayer7.play();
                            showFireflyText();

                            // Nach kurzer Verzögerung macht Firefly überraschte Drehung
                            setTimeout(function () {
                                let videoPlayer8 = document.getElementById('videoPlayer8');
                                videoPlayer8.style.display = 'block';
                                videoPlayer8.play();
                            }, 2000);
                            // showFireflyText();
                        
                        }, 100);
                    }, 3000);
                }

            }
            typeWriter();
        }, 1000);
    }, 2000);
}, 1000);


function showFireflyText () {
 
    let textWrapper = document.querySelector('.t-w-7');

    setTimeout(function () {
        textWrapper.classList.remove('hide');
        textWrapper.classList.add('show');

        setTimeout(function () {
            let i = 0;
            let texts = [
                'Ach, da bist du ja!',
                'Ich habe eine Nachricht fuer dich ...'
            ];

            let speed = 50;
            let currentIndex = 0;

            function typeWriter() {
                if (i < texts[currentIndex].length) {
                    document.getElementById("text-7").innerHTML += texts[currentIndex].charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                } else if (currentIndex < texts.length - 1) {
                    setTimeout(function () {
                        i = 0;
                        currentIndex++;
                        document.getElementById("text-7").innerHTML = '';
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
}