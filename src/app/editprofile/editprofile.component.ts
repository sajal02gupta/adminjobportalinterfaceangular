import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  emp: Employee = { currentRole: "", email: "", emp: "", fullName: "", empId: "",
  mobile: "", password: "", qualifications: "", skills: "", username: "", yearsofExperience: "" }

  username: string;

  constructor(private HttpCient: DataService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    if(sessionStorage.getItem("username")==null){
      this.route.navigate([''])

    }
    this.router.params.subscribe(params => this.username= params.username)

    this.HttpCient.getoneProfile(this.username).subscribe(response => {
      this.emp= response;
      console.log(this.emp);
    })
  }
  updateprofile(emp: Employee){
    this.HttpCient.updateEmployee(emp).subscribe(data => {
      alert("Employee updated Successfully")
    })
  }
  
  

}
