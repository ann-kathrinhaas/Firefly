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
    window.location.href = '02_categories.html';
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

// setTimeout(function() {
//     let hoverCategory = document.querySelectorAll('.category');

//     hoverCategory.forEach(function(element) {
//         element.classList.add('active');
//     });
// }, 1000);