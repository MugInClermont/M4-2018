import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { RecipeModel } from '../model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  public title: string = '';
  public recipes: Array<Array<RecipeModel>> = [];
  private size: number = 6;
  public showMode: string = 'last';
  public allRecipes : Array<RecipeModel> = [];

  constructor(private route: ActivatedRoute, private router: Router, private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.data.subscribe(data =>{
      this.title = data.title;
      this.showMode = data.showMode;
    } );
    this.recipeService.get().subscribe(data => {
      if (data){
        this.allRecipes = data;
        for(let i=0; i<data.length;i+=this.size){
          this.recipes.push(data.slice(i,this.size+i));
        }
      }
    });
  }

}
