import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private shoppingSubscription: Subscription;
  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();

    this.shoppingSubscription =
      this.shoppingService.shoppingEventEmitter.subscribe(ingredients => {
        this.ingredients = ingredients;
      });
  }

  ngOnDestroy(): void {
    this.shoppingSubscription.unsubscribe();
  }
}
