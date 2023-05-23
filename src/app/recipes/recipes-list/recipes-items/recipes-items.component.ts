import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipes-items',
  templateUrl: './recipes-items.component.html',
  styleUrls: ['./recipes-items.component.css'],
})
export class RecipesItemsComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: Number;

  ngOnInit(): void {}
}
