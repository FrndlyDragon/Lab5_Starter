// expose.js
const jsConfetti = new JSConfetti()

window.addEventListener('DOMContentLoaded', init);


function init() {
  const horn = document.querySelector("#horn-select");
  const playButton = document.querySelector('button');
  const slider = document.querySelector("[type='range']")
  var images = document.querySelectorAll('img');
  const audiosrc = document.querySelector('audio');

  horn.addEventListener('change', function() {
    console.log(horn.value);
    images[0].src = "assets/images/" + horn.value + ".svg";
    audiosrc.src = "assets/audio/" + horn.value + ".mp3";
  });

  playButton.addEventListener('click', function() {
    audiosrc.volume = slider.value / 100;
    console.log(audiosrc.volume);
    if (horn.value == "party-horn") {
      jsConfetti.addConfetti();
    }

    audiosrc.play();
  })

  slider.addEventListener('change', function() {
    console.log(slider.value);
    if (slider.value == 0) {
      images[1].src = "assets/icons/volume-level-0.svg";
    }

    if (1 <= slider.value && slider.value < 33) {
      images[1].src = "assets/icons/volume-level-1.svg";
    }

    if (33 <= slider.value && slider.value < 67) {
      images[1].src = "assets/icons/volume-level-2.svg";
    }

    if (67 <= slider.value && slider.value <= 100) {
      images[1].src = "assets/icons/volume-level-3.svg";
    }
  })
}
