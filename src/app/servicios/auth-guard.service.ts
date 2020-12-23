import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot,  RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor( private auth: AuthService, private router: Router ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (next.routeConfig.path === '' && this.router.url === '/login') {
      this.router.navigate(['/login']);
    }

    if (next.data.requiresLogin) {
      if (this.auth.isAuthenticated()) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    } else {
      return true;
    }
  }

}
