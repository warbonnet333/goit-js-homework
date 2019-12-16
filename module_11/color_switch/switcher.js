const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const refs = {
  body: document.querySelector("body"),
  startBtn: document.querySelector("button[data-action='start']"),
  stopBtn: document.querySelector("button[data-action='stop']")
};

const switcher = {
  isActive: false,

  start() {
    if (!this.isActive) {
      this.switcherId = setInterval(() => {
        const colorIndex = randomIntegerFromInterval(0, colors.length - 1);
        refs.body.style.backgroundColor = colors[colorIndex];
      }, 1000);
      this.isActive = true;
    }
  },

  stop() {
    clearInterval(this.switcherId);
    this.isActive = false;
  }
};

refs.startBtn.addEventListener("click", switcher.start.bind(switcher));
refs.stopBtn.addEventListener("click", switcher.stop.bind(switcher));

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
