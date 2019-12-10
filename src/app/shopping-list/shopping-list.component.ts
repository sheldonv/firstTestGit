import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Pasta',453),
    new Ingredient('Rice and Beans', 567),
    new Ingredient('Eggs and Sausage', 567)
  ];

  constructor() { }

  ngOnInit() {
  }

}
