import { Component, computed, effect, inject } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { AuthStatus } from './auth/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recetario';

  private authService = inject( AuthService );
  private router = inject( Router);

  public finishedAuthCheck = computed<boolean>( () => {
    if( this.authService.authStatus() ===  AuthStatus.checking){
      return false;
    }
    return true;
  });

  public authStatusChangedffect = effect( () => {
    switch ( this.authService.authStatus() ){
      case AuthStatus.checking:
        this.router.navigateByUrl('/auth/register');
        return;
      case AuthStatus.authenticated:
        this.router.navigateByUrl('/dashboard');
        return;
      case AuthStatus.notAuthenticated:
        this.router.navigateByUrl('/dashboard/list');
        return;
    }
  });
}
// case AuthStatus.notAuthenticated:
//         this.router.navigateByUrl('/auth/login');
//         return;
