import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataflowService } from '../dataflow.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  ID:any;
  fruits:any;

  constructor(private route:ActivatedRoute, private service:DataflowService) { }
  newdata = new FormGroup ({
    name: new FormControl(''),
     Age: new FormControl(''),
     class:new FormControl(''),
     id: new FormControl()
   
  })

  ngOnInit(): void {
    this.route.params.subscribe(
      para=>{
        this.ID= para.id;
        this.fruits=this.service.Item(this.ID);
        this.newdata.patchValue(this.fruits);
      }
    )
  }
  
  submit(){
    this.service.update(this.ID,this.newdata.value)
  }

}
