import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipes-items',
  templateUrl: './recipes-items.component.html',
  styleUrls: ['./recipes-items.component.css']
})
export class RecipesItemsComponent implements OnInit {

  @Input() recipe:Recipe;

   constructor(private recipeService:RecipeService) { }


  handleOnItemClick(){
    this.recipeService.recipeSelected.emit(this.recipe);
  }

  ngOnInit(): void {
  }

}
