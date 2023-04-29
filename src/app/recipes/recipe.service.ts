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
      'Biryani',
      'Test desc',
      'https://cdn.pixabay.com/photo/2020/05/11/21/57/bake-5160388_960_720.jpg',
      [new Ingredient('Rice', 1), new Ingredient('Chicken', 1)]
    ),
    new Recipe(
      'Paneer Lasoni',
      'Test Second desc',
      'https://cdn.pixabay.com/photo/2020/05/11/21/57/bake-5160388_960_720.jpg',
      [new Ingredient('Paneer', 1), new Ingredient('Lasoni', 1)]
    ),
  ];

  recipeSelected = new EventEmitter<Recipe>();
  constructor(private shoppingService: ShoppingService) {}

  getRecipe() {
    return [...this.recipes];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addMultipleIngredients(ingredients);
  }
}
