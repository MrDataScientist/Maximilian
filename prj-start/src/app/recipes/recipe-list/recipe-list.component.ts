import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe 1','this is simply a test','https://preview.ibb.co/kC20d0/Small-mario.png'),
    new Recipe('A test recipe 2','this is simply a test','https://preview.ibb.co/kC20d0/Small-mario.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
