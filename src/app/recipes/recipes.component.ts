import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

/**
 * We have initialized the Recipe Service Instance in the Providers section
 * All the Children of Recipe Component will share the same instance of the Recipe Service.
 * Children of Recipe Component are the components which are under the folder of the Recipe Component
 * 1) RecipeList
 * 2) RecipeItem
 * 3) RecipeDetails
 */
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    // this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
    //   this.selectedRecipe = recipe;
    // });
  }
}
