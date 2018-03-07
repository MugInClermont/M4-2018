import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RecipeModel } from '../model/recipe.model';
import { environment } from '../../environments/environment';

@Injectable()
export class RecipeService {

  constructor(private Http: HttpClient) { }

  get():Observable<Array<RecipeModel>>{
    return this.Http.get<Array<RecipeModel>>(`${environment.api.recipe.all}`);
  }

  getOne(id: number):Observable<RecipeModel>{
    return this.Http.get<RecipeModel>(`${environment.api.recipe.all}/${id}`);
  }
}
