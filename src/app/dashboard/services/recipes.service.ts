

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { Recipe } from '../interfaces/recipes.interface';
import { environments } from 'src/environments/envirenments';
import { Ingredientes } from '../interfaces/ingredients.interface';

@Injectable({providedIn: 'root'})
export class RecipesService {


  private baseUrl: string= environments.baseUrl;
  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]>{
    return this.http.get<Recipe[]>(`${ this.baseUrl }/dashboard/list`);
  }

  getRecipeById( id: string ): Observable<Recipe|undefined>{
    return this.http.get<Recipe>(`${ this.baseUrl }/dashboard/list/${ id }`)
      .pipe(
        catchError( error => of( undefined) )
    );
  }

  getSuggestions( query: string): Observable<Recipe[]>{
    return this.http.get<Recipe[]>(`${ this.baseUrl }/dashboard/list?q=${ query }&_limit=12`);
  }

  addRecipe(tipo: string, title:string, preparacion: string, tiempoCoccion: string, grados: string, tiempoElaboracion: string, tiempoTotal: string,
    alt_image?: string) : Observable<Recipe>{

    const url = `${ this.baseUrl }/dashboard/new-recipe`;
    const body = { tipo, title, preparacion, tiempoCoccion, grados, tiempoElaboracion, tiempoTotal, alt_image}
    console.log(body);
    return this.http.post<Recipe>( url, body )

    //catchError( err => throwError( () => err.error.message ))
  }

  updateRecipe(){
  }

  deleteRecipeById(){

  }
}
