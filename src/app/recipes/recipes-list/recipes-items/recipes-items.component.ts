import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipes-items',
  templateUrl: './recipes-items.component.html',
  styleUrls: ['./recipes-items.component.css']
})
export class RecipesItemsComponent implements OnInit {
  @Output() recipeItemSelected = new EventEmitter<void>();
  @Input() recipe:Recipe;

   constructor() { }


  handleOnItemClick(){
    this.recipeItemSelected.emit();
  }

  ngOnInit(): void {
  }

}
