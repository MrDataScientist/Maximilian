import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  username = '';
  allowNewServer = true;
  serverCreationStatus = 'test';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {

  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created';
  }

  onUpdateServer(event: any) {
    console.log(event);
  }
}


//TODO don't forget to check HttpClient / fetching data from an api using ES6
//TODO underscore.js for Angular services
//TODO Angular animation and materials
