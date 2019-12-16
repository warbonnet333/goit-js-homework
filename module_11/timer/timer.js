class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  createRefs() {
    this.currentTimer = document.querySelector("#timer-1");
    this.daySpan = document.querySelector("span[data-value='days']");
    this.hoursSpan = document.querySelector("span[data-value='hours']");
    this.minSpan = document.querySelector("span[data-value='mins']");
    this.secsSpan = document.querySelector("span[data-value='secs']");
  }

  start() {
    this.createRefs();
    setInterval(() => {
      const currentTime = new Date().getTime();
      const neededTime = this.targetDate.getTime();
      this.deltaTime = neededTime - currentTime;

      this.updateClockface();
    }, 1000);
  }

  transformDates() {
    this.days = Math.floor(this.deltaTime / (1000 * 60 * 60 * 24));
    this.hours = Math.floor(
      (this.deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    this.mins = Math.floor((this.deltaTime % (1000 * 60 * 60)) / (1000 * 60));
    this.secs = Math.floor((this.deltaTime % (1000 * 60)) / 1000);
  }

  updateClockface() {
    this.transformDates();

    this.daySpan.textContent = this.days;
    this.hoursSpan.textContent = this.hours;
    this.minSpan.textContent = this.mins;
    this.secsSpan.textContent = this.secs;
  }
}

const myBirthDay = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("3 17 2020")
});

myBirthDay.start();
