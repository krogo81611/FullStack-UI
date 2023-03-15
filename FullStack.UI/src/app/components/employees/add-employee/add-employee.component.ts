import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{
  
  addEmployeeRequest : Employee = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: 0,
    salary: 0,
    department: ''
  }

  constructor() {}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addEmployee() {
    console.log(this.addEmployeeRequest);
  }

}
