"use strict";

class Car {
  static getSpecs(car) {
    console.log(
      `maxSpeed: ${this.maxSpeed}, speed: ${this.speed}, isOn: ${this.isOn}, distance: ${this.distance}, price: ${this._price}`
    );
  }

  constructor({ speed = 0, price, maxSpeed, isOn, distance = 0 }) {
    this.speed = speed;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    this.speed += value;
    if (this.speed <= this.maxSpeed) {
      return this.speed;
    } else {
      return this.maxSpeed;
    }
  }

  decelerate(value) {
    this.speed -= value;
    if (this.speed < 0) {
      return (this.speed = 0);
    } else {
      return this.speed;
    }
  }

  drive(hours) {
    if (this.isOn) {
      this.distance = this.speed * hours;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs.call(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs.call(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
