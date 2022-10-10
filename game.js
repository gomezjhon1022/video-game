const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', starGame);
window.addEventListener('resize', starGame);

function starGame() {
  let canvasSize;

  if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.8;
  } else {
    canvasSize = window.innerHeight * 0.8;
  }

  canvas.setAttribute('height', canvasSize);
  canvas.setAttribute('width', canvasSize);

  const elementsSize = canvasSize / 10;

  game.font = elementsSize + 'px Verdana';
  game.textAlign = 'end';

  for (let i = 1; i <= 10; i++) {
    game.fillText(emojis['X'], elementsSize, elementsSize * i);
  }

  console.log('heig', window.innerHeight);
  console.log('wid', window.innerWidth);

}