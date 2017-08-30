import { Component } from '@angular/core';




@Component({
  
selector: 'app-root',
  
templateUrl: './app.component.html',
  
styleUrls: ['./app.component.css']


})

export class AppComponent {
  

title = 'Employee Details';

employees = [{name :"Sunil",  position : "Developer", salary : 20000},
{name :"Vamshi", position : "Java Developer",  salary : 30000},
{name : "Chethan", position : ".Net Developer",
salary : 10000}];

model:any={};
model2:any={};
addEmployee()
{
	this.employees.push(this.model);
	this.model = {};
}

deleteEmployee(i){
this.employees.splice(i,1)
console.log(i);
}
myValue;
editEmployee(k){
this.model2.name = this.employees[k].name;
this.model2.position = this.employees[k].position;
this.model2.salary = this.employees[k].salary;
this.myValue = k;
}
updateEmployee(){
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
