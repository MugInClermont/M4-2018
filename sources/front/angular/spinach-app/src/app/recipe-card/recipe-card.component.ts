import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from '../model/recipe.model';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {

  @Input()
  recipe: RecipeModel = null;

  constructor() { }

  ngOnInit() {
  }

}
