import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  click :boolean=false
  result
  constructor(private router:Router,private service:ValidationService) { }
  email : boolean= false
  password : boolean=false
  login = new FormGroup({
    Email: new FormControl( '',Validators.required),
    Password: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
    this.email=false;
    this.password=false
    
  }
  Submit(){
    this.service.validataion(this.login.value)
    if(this.login.value.Email !== "admin"){
      this.email=true
    }
    if(this.login.value.Password !=="admin"){
      this.password=true
    }
  }
  }
  
  
  

  
  

