import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private authServie : AuthServiceService,
    private router : Router) { }

  
  canActivate(activatedRoute : ActivatedRouteSnapshot,
routerState : RouterStateSnapshot ) : Promise<boolean> | boolean {
      
      return this.authServie.isAuthenticated() 
      .then( (result => {
        if(result) 
          return true;
        else
          return this.router.navigate(['/']);
      }) ) 
  }
}
