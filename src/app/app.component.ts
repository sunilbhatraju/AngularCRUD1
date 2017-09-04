import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@Component({

  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']

})

export class AppComponent implements OnInit{
  model:any={};
  model2:any={};
  edit= false;
  add=false;
  create=true;
  Show=false;
  myValue;
  ngOnInit(){
    this.model = new FormGroup({
      'name': new FormControl(this.model.name,
        [Validators.required, Validators.minLength(4),]),
      'position': new FormControl(this.model.position,
        [Validators.required, Validators.minLength(4),]),
      'salary': new FormControl(this.model.salary, Validators.required)
    });
  }
  title = 'Welcome to the Site';
  employees = [{name :"Sunil",  position : "Developer", salary : 20000},
    {name :"Vamshi", position : "Java Developer",  salary : 30000},
    {name : "Chethan", position : ".Net Developer", salary : 10000}];
  createEmp(){
   this.add=true;
   this.create=false;
    this.Show=false;
    this.edit=false;
  }
  addEmployee()
  {
    console.log()
    this.employees.push(this.model);
    this.Show = true;
 this.add=false;
    this.model = {};
  }

  deleteEmployee(i){
    this.employees.splice(i,1)
    this.Show=true;
    console.log(i);
  }
  editEmployee(k){
    this.edit = true;
    this.Show=false;
    this.add=false;

      this.model2.name = this.employees[k].name;
    this.model2.position = this.employees[k].position;
    this.model2.salary = this.employees[k].salary;
    this.myValue = k;
  }
  updateEmployee(){
    this.Show=true;
    this.edit = false;
    let k = this.myValue;
    for(let i=0;i<this.employees.length;i++){
      if(i==k)
      {
        this.employees[i]= this.model2;
        this.model2 = {};
      }
    }
  }
}
