// explore.js

const synth = window.speechSynthesis;
window.addEventListener('DOMContentLoaded', init);

function init() {
  const menu = document.querySelector("#voice-select");
  const playButton = document.querySelector('button');
  const text = document.querySelector('textarea');
  
  synth.addEventListener('voiceschanged', function() {
    const options = synth.getVoices();
    for (let i = 0; i < options.length; i++) {
      var newOption = document.createElement('option');
      newOption.textContent = options[i].name;
      menu.append(newOption);
      console.log(newOption);
    }
  });

  playButton.addEventListener('click', function() {
    const snippet = new SpeechSynthesisUtterance(text.value);
    const options = synth.getVoices();

    for (let i = 0; i < options.length; i++) {
      if (options[i].name === menu.value) {
        console.log("Voice selected")
        snippet.voice = options[i];
      }
    }

    const image = document.querySelector('img');
    image.src = "assets/images/smiling-open.png";
    synth.speak(snippet);

    snippet.onend = (event) => {
      image.src = "assets/images/smiling.png";
    }
  })


}