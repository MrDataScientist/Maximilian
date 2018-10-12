import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="decrement()">-</button>
    <span>{{counter}}</span>
    <button (click)="increment()">+</button>
  `
})
export class CounterComponent {

  counterValue = 0;

  get counter() {
    return this.counterValue;
  }

  set counter(value) {
    this.counterValue = value;
  }

  decrement() {
    this.counter--;
  }

  increment() {
    this.counter++;
  }
}
