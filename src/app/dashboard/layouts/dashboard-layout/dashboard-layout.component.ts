import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent {

  private authService = inject( AuthService );
  private router = inject( Router);

  public user = computed( ()=> this.authService.currentUser());

  constructor(
    private activatedRoute: ActivatedRoute,
  ){}

  public sidebarItems = [
    {label: 'Recetas', icon:'label', url:'./list'},
    {label: 'Añadir receta', icon:'add', url:'./new-recipe'},
    {label: 'Buscar', icon:'search', url:'./search'},
  ]

  goBack():void{
    this.router.navigateByUrl('recipes/list')
  }

  onLogout(){
    this.authService.logout();
  }

}
