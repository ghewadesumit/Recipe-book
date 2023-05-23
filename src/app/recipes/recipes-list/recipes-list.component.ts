import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[];

  /** On creating the component it fetches the required data from the RecipeService
   * Router from @angular/router is used to navigate to the desired location
   */
  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.recipes = this.recipeService.getRecipe();
  }

  ngOnInit(): void {}

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
