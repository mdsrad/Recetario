import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from '../interfaces/recipes.interface';

@Pipe({
  name: 'recipeImage'
})
export class RecipeImagePipe implements PipeTransform {

  transform(recipe: Recipe): string  {
    if (!recipe.alt_image && !recipe ){
      return 'assets/no-image.png';
    }

    if ( recipe.alt_image ) return recipe.alt_image;  // la url si cogemos la img de internet

    //return `assets/recipe/${ recipe }.jpg`;
    return `assets/no-image.png`;
  }

}
