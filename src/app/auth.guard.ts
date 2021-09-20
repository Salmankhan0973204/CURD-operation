import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ValidationService } from './validation.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  login
  constructor(private service:ValidationService, private router:Router ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
      if(this.service.islogin==true){
        console.log("login")
        return true;
      }
      else{
        console.log("false")
        this.router.navigate(['/'])
    return false;}
  }
  
}
