import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-new-emp',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './create-new-emp.html',
  styleUrl: './create-new-emp.scss',
})
export class CreateNewEmp {
  employee ={
    firstName : '',
    lastName : '',
    email: '',
    jobTitle :'',
    department:'',
    active: false
  }
  constructor(private empService : EmployeeService){}

  createEmployee(){
      //call API to create new employee
      this.empService.createEmployee(this.employee).subscribe({
        next: (response) =>{
          console.log("Employee Added",response);
          alert("Employee Successfully added");
        },
        error:(response)=> {
          console.log(this.employee);
          console.log("Failed to add employee");
          alert("Failed to add employee to database");
        }
      })
    
  }
}
