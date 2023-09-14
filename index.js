const EventEmitter = require('events');
const trafficLight = new EventEmitter();

const colors = ["Red", "Yellow", "Green"];
let currentIndex = 0;

function changeLight() {
  const currentColor = colors[currentIndex];
  trafficLight.emit('colorChange', currentColor);
  currentIndex = (currentIndex + 1) % colors.length;
}

function startTrafficLight() {
  setInterval(changeLight, 5000); // Red for 5 seconds
  setTimeout(() => {
    changeLight();
    setInterval(changeLight, 5000); // Green for 5 seconds
  }, 2000); // Yellow for 2 seconds
}

startTrafficLight();

trafficLight.on('colorChange', (currentColor) => {
  console.log('The light just changed to', currentColor);
});
