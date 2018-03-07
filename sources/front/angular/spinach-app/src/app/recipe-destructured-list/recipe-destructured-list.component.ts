import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from '../model/recipe.model';

@Component({
  selector: 'app-recipe-destructured-list',
  templateUrl: './recipe-destructured-list.component.html',
  styleUrls: ['./recipe-destructured-list.component.scss']
})
export class RecipeDestructuredListComponent implements OnInit {
  
  @Input()
  recipes: Array<RecipeModel> = [];

  constructor() { }

  ngOnInit() {
  }

}
