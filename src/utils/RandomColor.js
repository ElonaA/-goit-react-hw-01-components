function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(98));
}

function RandomColor() {
  return `rgba(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()}, 0.75)`;
}

export default RandomColor;
