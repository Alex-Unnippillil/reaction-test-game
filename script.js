
let startTime, endTime;
let clicked = false;

function randomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function appearTarget() {
  const target = document.getElementById('target');
  const time = randomTime(1000, 3000); // Random time between 1s and 3s
  setTimeout(() => {
    target.style.display = 'block';
    startTime = new Date();
  }, time);
}

document.getElementById('target').addEventListener('click', () => {
  if (!clicked) {
    endTime = new Date();
    const reactionTime = (endTime - startTime) / 1000; // Convert to seconds
    alert(`Your reaction time: ${reactionTime.toFixed(2)} seconds`);
    clicked = true;
  }
});

function startGame() {
  clicked = false;
  document.getElementById('target').style.display = 'none';
  appearTarget();
}
