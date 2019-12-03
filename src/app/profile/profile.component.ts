import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  emp: Employee = { currentRole: "", email: "", emp: "", fullName: "", empId: "",
               mobile: "", password: "", qualifications: "", skills: "", username: "", yearsofExperience: "" }
               
  constructor(private httpclientservice: DataService, private router: ActivatedRoute, private route: Router
    ) { }

  username: string;
  ngOnInit() {
    console.log(sessionStorage.getItem("username"))
    if(sessionStorage.getItem("username")==null){
      this.route.navigate([''])

    }
    this.router.params.subscribe(params => {
      this.username=params.username;
      console.log(params.username); 
    });
    
    this.httpclientservice.getoneProfile(this.username).subscribe(response => {
      console.log('response');
      console.log(response);
      this.emp = response;
      console.log(this.emp);
    })
  }
}