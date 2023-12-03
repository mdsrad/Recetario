import { Component, Input, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Ingredientes, Recipe } from '../../interfaces/recipes.interface';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styles: [
  ]
})
export class RecipePageComponent{

  public recipe?: Recipe;
  public todosIngredientes: Ingredientes [] = [];

  constructor(
    private recipeService: RecipesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ){}



  goBack():void{
    this.router.navigateByUrl('recipes/list')
  }
}
