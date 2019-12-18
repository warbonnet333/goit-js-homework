const moment = require('moment');

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = moment.utc(targetDate);
  }

  createRefs() {
    this.body = document.querySelector('body');
    this.currentTimer = document.querySelector('#timer-1');
    this.daySpan = document.querySelector("span[data-value='days']");
    this.hoursSpan = document.querySelector("span[data-value='hours']");
    this.minSpan = document.querySelector("span[data-value='mins']");
    this.secsSpan = document.querySelector("span[data-value='secs']");
    this.body.style.opacity = 0;
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
    this.hours = moment.utc(this.targetDate - this.currentTime).format('hh');
    this.mins = moment.utc(this.targetDate - this.currentTime).format('mm');
    this.secs = moment.utc(this.targetDate - this.currentTime).format('ss');
  }

  updateClockface() {
    this.transformDates();

    this.daySpan.textContent = this.days.toString().padStart(2, '0');
    this.hoursSpan.textContent = this.hours.toString().padStart(2, '0');
    this.minSpan.textContent = this.mins.toString().padStart(2, '0');
    this.secsSpan.textContent = this.secs.toString().padStart(2, '0');
    this.body.style.opacity = 1;
  }
}

const myBirthDay = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('3 17 2020'),
});

myBirthDay.start();
