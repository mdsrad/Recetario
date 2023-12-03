import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  templateUrl: './dashboard-layout.component.html',
})
export class DashboardLayoutComponent {

  private authService = inject( AuthService );
  private router = inject( Router);

  public user = computed( ()=> this.authService.currentUser());

  public sidebarItems = [
    {label: 'Recetas', icon:'label', url:'./list'},
    {label: 'Añadir receta', icon:'add', url:'./new-recipe'},
    {label: 'Buscar', icon:'search', url:'./search'},
  ]

  goBack():void{
    this.router.navigateByUrl('dashboard/list')
  }

  onLogout(){
    this.authService.logout();
  }

}
