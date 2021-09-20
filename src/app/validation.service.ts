import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

   public islogin :  boolean=false;

  constructor(private router:Router) { }

  validataion(value:any){
    if(  value.Email == 'admin' && value.Password =='admin'){
         this.router.navigate(['./list'])
         this.islogin=true}
         else
         {
           console.log('wroing data')
         }
    }
  
  }

