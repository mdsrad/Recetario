import { Component, Input, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Recipe } from '../../interfaces/recipes.interface';
import { Ingredientes } from '../../interfaces/ingredients.interface';

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

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        //delay(800),
        switchMap( ({ id })  => this.recipeService.getRecipeById( id )),
      )
      .subscribe( recipe => {
        if ( !recipe ) return this.router.navigate([ '/recipes/list' ]);
        this.recipe = recipe;

        // this.recipe.ingrediente.split(', ').forEach(element => {
        //   console.log(element);
        // });

        // this.recipe.cantidad.split(', ').forEach(element => {
        //   console.log(element);
        // });

        // this.recipe.unidadMedida.split(', ').forEach(element => {
        //   console.log(element);
        // });

        return;
      });
  }

  goBack():void{
    this.router.navigateByUrl('recipes/list')
  }
}
