import { Component, OnInit } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  topics = ['Angular', 'React', 'Vue'];

  userModel = new User('rob', 'rob@hjgjh.com', 34543543, '', 'morning', true);

  ngOnInit(): void {
  }

}
