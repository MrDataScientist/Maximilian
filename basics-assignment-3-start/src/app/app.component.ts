import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  btnText: string = 'show';

  toggle(): void {
    if (this.btnText === 'show') {
      this.btnText = 'Hide';
    } else {
      this.btnText = 'show';
    }
  }
}
