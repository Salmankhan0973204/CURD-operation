import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { DataflowService } from '../dataflow.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor( private service:DataflowService) { }
  fruits;
  Originalfruits;


  ngOnInit(): void {
     this.fruits= this.service.data()
     this.Originalfruits = this.fruits
  } 
    searchtext='';
    idCounter = 0;

    newValue = new FormGroup({
      name : new FormControl(),
      Age : new FormControl(),
      class : new FormControl()
    })
    
    add(){
      this.fruits.push({id: this.fruits.length +1 , name:this.newValue.value.name, Age:this.newValue.value.Age, class:this.newValue.value.class})
    }
    deleteRow(index:any){
      console.log(index)
      this.fruits.splice(index,1)
    }
    
  onClick(){
    if(this.searchtext != ""){
      this.fruits= this.Originalfruits;
      return this.fruits = this.fruits.filter(word => word.name == this.searchtext );

    }
  }
  Reset(){
    this.fruits= this.Originalfruits;
    console.log(this.fruits)
  }}
  
  


