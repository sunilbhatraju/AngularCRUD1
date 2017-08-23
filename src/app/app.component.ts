import { Component } from '@angular/core';

@Component({
  
selector: 'app-root',
  
templateUrl: './app.component.html',
  
styleUrls: ['./app.component.css']

})

export class AppComponent {
  
title = 'Employee Details';

employees = [
{name :"Sunil",  position : "Developer", salary : 20000},
{name :"Vamshi", position : "Java Developer",  salary : 30000},
{name : "Chethan", position : ".Net Developer",
salary : 10000}
];
model:any={};
addEmployee()
{
	this.employees.push(this.model);
	this.model = {};
}

deleteEmployee(i){
this.employees.splice(i,1)
console.log(i);
}
}