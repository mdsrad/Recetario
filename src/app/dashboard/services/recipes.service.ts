

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Recipe } from '../interfaces/recipes.interface';
import { environments } from 'src/environments/envirenments';

@Injectable({providedIn: 'root'})
export class RecipesService {


  private baseUrl: string= environments.baseUrl;
  constructor(private http: HttpClient) { }

  getRecipes(){

  }

  getRecipeById(){

  }

  getSuggestions(){

  }

  addRecipe(){
  }

  updateRecipe(){
  }

  deleteRecipeById(){

  }
}
