import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { CommonModule } from '@angular/common';
import {employee} from '../../interfaces/employee';
import { FormGroup, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-view-all-users',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    
],
  templateUrl: './view-all-users.html',
  styleUrl: './view-all-users.scss',
})

export class ViewAllUsers implements OnInit {
    employee ={
    firstName : '',
    lastName : '',
    email: '',
    jobTitle :'',
    department:'',
    active: false
  }
  constructor(private empService: EmployeeService, private fb: FormBuilder){}
  isReadOnly = true;
  users : employee[] = [];
  oneEmp!: employee;

  ngOnInit() : void{
    this.empService.getAllEmployees().subscribe(data =>{
      this.users = data;
    });
  }
  viewEmployee(userId:any){
    this.empService.getEmployee(userId).subscribe(data=>{
      this.oneEmp = data;
    });
  }
  enableEditing(){
    this.isReadOnly = !this.isReadOnly;
  }
  updateEmployee(id:any,emp: employee){

    this.empService.updateEmployee(id,emp).subscribe(data=>{
      if(data == null){
        alert("updating record failed");
      }else{
        alert(`update record sucessfully ${data.jobTitle}`);
          this.oneEmp = data;
      }
    })

  }
}
