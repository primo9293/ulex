import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(private authService: AuthService,
    private router: Router){

}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
      /* const tok = localStorage.getItem('user');
      console.log(tok);
      let dato
      if(tok){
        dato = true
      } else {
        this.router.navigateByUrl('/login');
        dato = false
      }

      return dato  */ 
      const tok = localStorage.getItem('user');
      if (!tok)  {
        return false;
    } 
    this.router.navigateByUrl('/login');
    return true;  
  }
  
}
