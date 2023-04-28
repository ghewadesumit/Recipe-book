import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>()
  public viewRecipe:Boolean = false;
  constructor() { }

  setFeature(feature:string){
    this.featureSelected.emit(feature);
  }

  ngOnInit(): void {
  }

}
