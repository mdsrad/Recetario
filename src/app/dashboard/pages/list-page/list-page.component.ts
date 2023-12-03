import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../interfaces/recipes.interface';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [
  ]
})
export class ListPageComponent {
  public recipes: Recipe[] = [];

  constructor( private recipesService: RecipesService){

  }


}
