import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css'],
})
export class RecipesDetailsComponent implements OnInit {
  recipe: Recipe;
  id: Number;
  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  /**
   * This component is fetching data based on the selection of recipe done in the recipe-item component
   * This component is looking out for the changes in the url for variable "id"
   * we have subscribed to event of changing URL as soon as it changes we call the recipeService to get
   * the current recipe.
   */
  ngOnInit(): void {
    const id = this.route.params.subscribe((param: Params) => {
      this.id = +param['id'];
      this.recipe = this.recipeService.getSingleRecipe(this.id);
    });
  }

  onAddToShoppingList() {
    console.log('adding to shopping list');
    this.router.navigate(['shopping-list']);
    // this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  navigateToEditing() {
    this.router.navigate([`edit`], { relativeTo: this.route });
  }
}
