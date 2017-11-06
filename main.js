

function playSoundTransition (event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key ="${event.keyCode}"]`)
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}



const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitioned', endTransition));
window.addEventListener('keydown', playSoundTransition);
