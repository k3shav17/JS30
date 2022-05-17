function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

function playSound(e) {
  const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[key-data="${e.keyCode}"]`);
  if (!sound) return;

  key.classList.add("playing");
  sound.currentTime = 0;
  sound.play();
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
