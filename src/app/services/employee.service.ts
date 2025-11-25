import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { employee } from '../interfaces/employee';

@Injectable({ providedIn: 'root' })
export class EmployeeService {

  private apiUrl = 'http://localhost:8080/api/employees';

  constructor(private http: HttpClient) {}

  createEmployee(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
  getAllEmployees():Observable<any>{
      return this.http.get(this.apiUrl);
  }
  getEmployee(id: any){
    return this.http.get<employee>(`${this.apiUrl}/${id}`);
  }
}
