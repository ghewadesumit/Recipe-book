import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] =[new Recipe('A test Recipe','Test desc','https://cdn.pixabay.com/photo/2020/05/11/21/57/bake-5160388_960_720.jpg'),
  new Recipe('Second Recipe','Test Second desc','https://cdn.pixabay.com/photo/2020/05/11/21/57/bake-5160388_960_720.jpg')];

  @Output() recipeWasSelected =  new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }

  getCurrentRecipe(recipeItem){
    console.log('in the list');
    this.recipeWasSelected.emit(recipeItem);
  }

}
