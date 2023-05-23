import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Coffee',
      'Ghar ki coffee ka swad',
      'https://cdn.pixabay.com/photo/2020/05/11/21/57/bake-5160388_960_720.jpg',
      [new Ingredient('Rice', 1), new Ingredient('Chicken', 1)]
    ),
    new Recipe(
      'Ice Cream ',
      'Vanilla Flavor',
      'https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894_960_720.jpg',
      [new Ingredient('Paneer', 1), new Ingredient('Lasoni', 1)]
    ),
  ];

  constructor(private shoppingService: ShoppingService) {}

  getRecipe(): Recipe[] {
    return [...this.recipes];
  }

  getSingleRecipe(id): Recipe {
    return this.recipes[id];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addMultipleIngredients(ingredients);
  }
}
