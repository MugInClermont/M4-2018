import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RatingComponent } from './common/rating/rating.component';
import { RecipeService } from './services/recipe.service';
import { HttpClientModule } from '@angular/common/http';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipeDestructuredListComponent } from './recipe-destructured-list/recipe-destructured-list.component';
import { RecipeSimpleListComponent } from './recipe-simple-list/recipe-simple-list.component';

const appRoutes : Routes = [
  { path: 'recipes', component: RecipeListComponent, data:{title: 'All recipes', showMode: 'all' } },
  { path: 'last-recipes', component: RecipeListComponent, data: { title: 'Last added', showMode: 'last'} },
  { path: 'recipe/:id', component: RecipeDetailComponent },
  { path: '', redirectTo: '/last-recipes', pathMatch: 'full' },
  { path: '**', redirectTo: 'last-recipes', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    NotFoundComponent,
    RecipeDetailComponent,
    RatingComponent,
    RecipeCardComponent,
    RecipeDestructuredListComponent,
    RecipeSimpleListComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    NgbModule.forRoot()
  ],
  providers: [ RecipeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 