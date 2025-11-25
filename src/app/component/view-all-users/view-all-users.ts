import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { CommonModule } from '@angular/common';
import {employee} from '../../interfaces/employee';

@Component({
  selector: 'app-view-all-users',
  standalone: true,
  imports: [
    CommonModule,
    
],
  templateUrl: './view-all-users.html',
  styleUrl: './view-all-users.scss',
})

export class ViewAllUsers implements OnInit {
  constructor(private empService: EmployeeService){}
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
}
