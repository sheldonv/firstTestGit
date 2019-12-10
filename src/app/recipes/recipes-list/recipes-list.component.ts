import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test','https://live.staticflickr.com/3284/2536005489_426b7d2a7c_b.jpg'),
    new Recipe('Another Test Recipe','Another Test Description','https://www.army.mil/e2/c/images/2015/10/30/414509/size0.jpg',)
  ];
  constructor() { }

  ngOnInit() {
  }

}
