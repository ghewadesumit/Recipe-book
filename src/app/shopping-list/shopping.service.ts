import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Banana', 10),
  ];

  shoppingEventEmitter = new Subject<Ingredient[]>();

  constructor() {}

  getIngredients(): Ingredient[] {
    return [...this.ingredients];
  }

  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.shoppingEventEmitter.next(this.ingredients);
  }

  addMultipleIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.shoppingEventEmitter.next([...this.ingredients]);
  }
}
