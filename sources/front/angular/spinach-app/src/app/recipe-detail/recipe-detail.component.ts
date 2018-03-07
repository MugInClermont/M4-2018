import { Component, OnInit, Input } from '@angular/core';
import { RatingComponent } from '../common/rating/rating.component';
import { RecipeService } from '../services/recipe.service';
import { RecipeModel } from '../model/recipe.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  public recipe: RecipeModel;

  constructor(private router: Router, private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {

    this.route.params.subscribe(p => {
      let recipeId = p['id'];
      this.recipeService.getOne(recipeId).subscribe(data => {
        this.recipe = data;
        console.log(this.recipe);
      });
    });
  }

}
