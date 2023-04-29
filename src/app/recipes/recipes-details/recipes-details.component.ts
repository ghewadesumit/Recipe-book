import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css'],
})
export class RecipesDetailsComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  onAddToShoppingList() {
    console.log('adding to shopping list');
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
