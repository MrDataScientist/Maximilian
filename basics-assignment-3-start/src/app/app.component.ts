import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  btnTextShow = 'Hide Details';
  btnTextHide = 'Display Details';
  btnText = this.btnTextShow;

  toggle(): void {
    if (this.btnText === this.btnTextShow) {
      this.btnText = this.btnTextHide;
    } else {
      this.btnText = this.btnTextShow;
    }
  }

  constructor() {
  }
}
