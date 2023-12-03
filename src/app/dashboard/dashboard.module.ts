import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipePageComponent } from './pages/recipe-page/recipe-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { AddNewRecipeComponent } from './pages/new-recipe/add-new-recipe.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { CardComponent } from './components/card/card.component';
import { RecipeImagePipe } from './pipes/recipe-image.pipe';
import { SearchRecipeComponent } from './components/search-recipe/search-recipe.component';


@NgModule({
  declarations: [
    DashboardLayoutComponent,
    RecipePageComponent,
    ListPageComponent,
    ListPageComponent,
    AddNewRecipeComponent,
    SearchPageComponent,
    CardComponent,
    RecipeImagePipe,
    SearchRecipeComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class DashboardModule { }
