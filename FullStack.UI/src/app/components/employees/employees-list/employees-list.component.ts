import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee.model'
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent {

  employees: Employee[] = [
        
  ];

  constructor() { }

  ngOnInit(): void {
    
  }
}
