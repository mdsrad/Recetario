import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RecipesService } from '../../services/recipes.service';
import { Ingredientes } from '../../interfaces/ingredients.interface';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { Recipe } from '../../interfaces/recipes.interface';


@Component({
  selector: 'app-add-new-recipe',
  templateUrl: './new-recipe.component.html',
  styles: [
  ]
})
export class AddNewRecipeComponent {

  private fb = inject( FormBuilder );
  private authService = inject( AuthService );
  private router = inject( Router );
  private recipeService = inject( RecipesService);

  public grados = [
    { id: 1, desc: '80º'}, { id: 2, desc: '90º'}, { id: 3, desc: '100º'}, { id: 4, desc: '110º'}, { id: 5, desc: '120º'},
    { id: 6, desc: '130º'}, { id: 7, desc: '140º'}, { id: 7, desc: '150º'}, { id: 7, desc: '160º'}, { id: 7, desc: '170º'},
    { id: 7, desc: '180º'}, { id: 7, desc: '190º'}, { id: 7, desc: '200º'}, { id: 7, desc: '210º'}, { id: 7, desc: '220º'},
    { id: 7, desc: '230º'}
  ]

  public medidas = [
    {id: 'Kilogramos', desc: 'Kilogramos' },
    {id: 'Gramos', desc: 'Gramos'},
    {id: 'Litros', desc: 'Litros'},
    {id: 'Mililitros', desc: 'Mililitros'},
    {id: 'Unidad', desc: 'Unidad'},
    {id: 'Medida de yogur', desc: 'Medida de yogur'},
    {id: 'Al gusto', desc: 'Al gusto'}
  ]

  public myForm: FormGroup= this.fb.group({
    name:     ['', [ Validators.required ]],
    email:    ['', [ Validators.required, Validators.email ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
  })

  public recipeForm = new FormGroup({
    title:            new FormControl<string>('', { nonNullable: true }),
    tipo:             new FormControl<string>(''),
    tiempoElaboracion:new FormControl<string>(''),
    tiempoTotal:      new FormControl<string>(''),

    // INGREDIENTES

    nombre:           new FormControl<string>(''),
    unidadMedida:     new FormControl<string>(''),
    cantidad:         new FormControl<string>(''),

    preparacion:      new FormControl<string>(''),
    grados:           new FormControl<string>(''),
    tiempoCoccion:    new FormControl<string>(''),
    alt_image:        new FormControl<string>(''),
  });


  public todosIngredientes: Ingredientes [] = [];
  public nombre: string = '';
  public unidad: string = '';
  public cantidad: string = '';


  goBack():void{
    this.router.navigateByUrl('dashboard/list')
  }
  eliminarIngrediente(nombre: string){
    const ingrAeliminar = nombre;
    const index = this.todosIngredientes.findIndex( x => x.nombre === ingrAeliminar );
    this.todosIngredientes.splice(index, 1);
  }

  get currentRecipe(): Recipe{
    const recipe = this.recipeForm.value as Recipe;
    return recipe;
  }

  get currentIngredients(): Ingredientes{
    const Ingredientes = this.recipeForm.value as Ingredientes;
    return Ingredientes;
  }

  addIngrediente(){
    if ( this.currentIngredients.nombre === '' || this.currentIngredients.unidadMedida === '' ) return;
    if ( this.currentIngredients.nombre !== '' && this.currentIngredients.cantidad === ''  && this.currentIngredients.unidadMedida !== 'Al gusto') return;
    if ( this.currentIngredients.nombre !== '' && this.currentIngredients.cantidad !== ''  && this.currentIngredients.unidadMedida === 'Al gusto') return;

    if (this.currentIngredients.cantidad !== '' ){
    this.todosIngredientes.push({
      nombre: this.currentIngredients.nombre,
      unidadMedida: this.currentIngredients.unidadMedida,
      cantidad: this.currentIngredients.cantidad
    });}
    else {
      this.todosIngredientes.push({
        nombre: this.currentIngredients.nombre,
        unidadMedida: this.currentIngredients.unidadMedida
      });
    }
    //localStorage.setItem("Ingrediente", JSON.stringify(this.todosIngredientes));
  }

  addRecipe(){
    const { tipo, title, preparacion, tiempoCoccion, grados, tiempoElaboracion, tiempoTotal, alt_image} = this.recipeForm.value;
    this.recipeService.addRecipe(tipo!, title!, preparacion!, tiempoCoccion!, grados!, tiempoElaboracion!, tiempoTotal!, alt_image! )
    .subscribe({
      next: () => {
        this.router.navigateByUrl('/dashboard/new-recipe')
        Swal.fire({
          text: "Receta grabada con éxito!",
          icon: "success",
          confirmButtonColor: '#FFC436',
        });
      },
      error: () => {
        Swal.fire(
          {
            title: 'Error!',
            text: 'Todos los campos son obligatorios, excepto la imagen',
            icon: 'error',
            confirmButtonText: 'Cerrar',
            confirmButtonColor: '#FFC436',
          });
      }
    })
  }
}
