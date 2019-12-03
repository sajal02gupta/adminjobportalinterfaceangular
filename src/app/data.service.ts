import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Employee } from './employee';
import { Login } from "./Login";
import { RegisterEmployee } from './register-employee';
import { AcceptedEmployees } from './accepted-employees';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private httpclient: HttpClient) { }

  getProfile() {
    console.log("test call");
    return this.httpclient.get<Employee[]>('http://localhost:8080/employees');
  }

  getoneProfile(username:string) {
    console.log('username -> getoneProfile');
    console.log(username);
    return this.httpclient.get<Employee>('http://localhost:8080/findone/'+username);
  }

  public registerEmployee(registeremployee:RegisterEmployee) {
    console.log("Data entered successfully");
    console.error('pritning emp reg data');
    
    console.log(registeremployee);
    
    return this.httpclient.post<RegisterEmployee>("http://localhost:8080/employees", registeremployee);
  }
  
  public createEmployee(employee:Employee) {
    console.log("Data entered successfully");
    return this.httpclient.post<Employee>("http://localhost:8080/employees", employee);
  }

  findById(id: string) {
    return this.httpclient.get<Employee>("http://localhost:8080/employees/findById/"+id)
  }

  public updateEmployee(emp: Employee) {
    console.log("updated");
    console.log(emp.empId);
    return this.httpclient.put<Employee>("http://localhost:8080/employees/updateemployee/"+emp.empId, emp);
  }

  createappliedemployee(aemp: AcceptedEmployees){
    console.log("inside appliedemployee");
    return this.httpclient.post<AcceptedEmployees>("http://localhost:8080/appliedemployees",aemp);
  }
}
