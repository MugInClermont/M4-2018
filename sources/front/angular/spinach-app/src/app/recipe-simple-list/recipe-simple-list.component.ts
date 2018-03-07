import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from '../model/recipe.model';

@Component({
  selector: 'app-recipe-simple-list',
  templateUrl: './recipe-simple-list.component.html',
  styleUrls: ['./recipe-simple-list.component.scss']
})
export class RecipeSimpleListComponent implements OnInit {

  @Input()
  public recipes: Array<RecipeModel> = [];

  constructor() { }

  ngOnInit() {
  }

}
