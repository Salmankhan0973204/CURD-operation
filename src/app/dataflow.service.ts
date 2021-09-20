import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataflowService {
  result:any
 
  
  fruits:{id:number,name:string,Age:number,class:number}[] = [
      
    { id: 1, name: "ahmad" , Age:18 , class: 7 },
    { id: 2, name: "jawad", Age:19, class:8 },
    { id: 3, name: "zubair", Age:22, class:9},
    { id: 4, name: "ali", Age: 15 ,class:8},   
  ];

  constructor( private router:Router) { }
  private subjt=new Subject<any>();

  data(){
    return this.fruits
  }

  Item(Id:number){
    return this.fruits[Id];}


  update(id:number, data:any){
    console.log(data);
    
    this.fruits[id]=data
    this.subjt.next(this.fruits)
    console.log(this.fruits)
    this.router.navigate(["./"])

    }

 

  }


