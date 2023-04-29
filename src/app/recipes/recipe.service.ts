import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] =[new Recipe('A test Recipe','Test desc','https://cdn.pixabay.com/photo/2020/05/11/21/57/bake-5160388_960_720.jpg'),
  new Recipe('Second Recipe','Test Second desc','https://cdn.pixabay.com/photo/2020/05/11/21/57/bake-5160388_960_720.jpg')];

  recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  getRecipe(){
    return [...this.recipes];
  }

}
