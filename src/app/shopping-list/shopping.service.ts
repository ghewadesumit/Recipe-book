import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  private ingredients: Ingredient[] = [ new Ingredient('Apples',5),
  new Ingredient('Banana',10)];

  shoppingEventEmitter = new EventEmitter<Ingredient[]>();

  constructor() {
  }

  getIngredients():Ingredient[]{
    return [...this.ingredients];
  }

  addIngredients(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.shoppingEventEmitter.emit(this.ingredients);
  }

}


