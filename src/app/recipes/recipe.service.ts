import { Injectable } from '@angular/core';
import { Ingredient} from '../shared';
import {Recipe} from "./recipe";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://images.derberater.de/files/imagecache/456xXXX_berater/berater/slides/WienerSchnitzel.jpg', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [
      new Ingredient('Romaine Lettuce', 2),
      new Ingredient('Watermelon', 1),
    ])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

}
