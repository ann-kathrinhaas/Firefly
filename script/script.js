setTimeout(function() {
    var textWrapper = document.querySelector('.text-wrapper');
    
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