import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '@auth/services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
) {}

  canActivate() {
    const currentUser = this.authService.registeredUserValue;
    if (currentUser) {
        return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
  
}
