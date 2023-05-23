import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})

/**Activated route holds the method to listen to the URL change or get any parameter which were set in route configuration */
export class RecipeEditComponent implements OnInit {
  id: Number;
  isEdit: Boolean = false;
  constructor(private route: ActivatedRoute) {}

  /** We do not need to clean observables defined by Angular.
   * However, we need to clean up custom obeservable created  by us.
   */
  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.id = +param['id'];
      this.isEdit = param['id'] != null;
    });
  }
}
