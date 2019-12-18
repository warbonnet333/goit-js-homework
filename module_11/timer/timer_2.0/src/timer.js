const moment = require('moment');

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = moment(targetDate);
  }

  createRefs() {
    this.currentTimer = document.querySelector('#timer-1');
    this.daySpan = document.querySelector("span[data-value='days']");
    this.hoursSpan = document.querySelector("span[data-value='hours']");
    this.minSpan = document.querySelector("span[data-value='mins']");
    this.secsSpan = document.querySelector("span[data-value='secs']");
    this.daySpan.style.opacity = 0;
    this.hoursSpan.style.opacity = 0;
    this.minSpan.style.opacity = 0;
    this.secsSpan.style.opacity = 0;
  }

  start() {
    this.createRefs();
    setInterval(() => {
      this.currentTime = moment();

      this.updateClockface();
    }, 1000);
  }

  transformDates() {
    this.days = this.targetDate.diff(this.currentTime, 'days');
    this.hours = this.targetDate.diff(this.currentTime, 'hours');
    this.mins = this.targetDate.diff(this.currentTime, 'minutes');
    this.secs = this.targetDate.diff(this.currentTime, 'seconds');
  }

  updateClockface() {
    this.transformDates();

    this.daySpan.textContent = this.days.toString().padStart(2, '0');
    this.hoursSpan.textContent = this.hours.toString().padStart(2, '0');
    this.minSpan.textContent = this.mins.toString().padStart(2, '0');
    this.secsSpan.textContent = this.secs.toString().padStart(2, '0');
    this.daySpan.style.opacity = 1;
    this.hoursSpan.style.opacity = 1;
    this.minSpan.style.opacity = 1;
    this.secsSpan.style.opacity = 1;
  }


  // start() {
  //   this.createRefs();
  //   setInterval(() => {
  //     const currentTime = new Date().getTime();
  //     const neededTime = this.targetDate.getTime();
  //     this.deltaTime = neededTime - currentTime;

  //     this.updateClockface();
  //   }, 1000);
  // }

  // transformDates() {
  //   this.days = Math.floor(this.deltaTime / (1000 * 60 * 60 * 24));
  //   this.hours = Math.floor(
  //     (this.deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //   );
  //   this.mins = Math.floor((this.deltaTime % (1000 * 60 * 60)) / (1000 * 60));
  //   this.secs = Math.floor((this.deltaTime % (1000 * 60)) / 1000);
  // }
}


const myBirthDay = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('3 17 2020'),
});

myBirthDay.start();
