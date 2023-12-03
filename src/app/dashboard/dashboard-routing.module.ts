import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { AddNewRecipeComponent } from './pages/new-recipe/add-new-recipe.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { RecipePageComponent } from './pages/recipe-page/recipe-page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: 'new-recipe', component: AddNewRecipeComponent },
      { path: 'search', component: SearchPageComponent },
      { path: 'edit/:id', component: AddNewRecipeComponent },
      { path: 'list', component: ListPageComponent },
      { path: ':id', component: RecipePageComponent },
      { path: '**', redirectTo: 'list' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
