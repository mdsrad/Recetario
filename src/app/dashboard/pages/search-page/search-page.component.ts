import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Recipe } from '../../interfaces/recipes.interface';
import { RecipesService } from '../../services/recipes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: [
  ]
})
export class SearchPageComponent {

  public searchInput = new FormControl('');
  public recipes: Recipe[] = [];
  public selectedRecipe?: Recipe;

}
