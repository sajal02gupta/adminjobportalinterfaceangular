import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  emp: Employee = { currentrole: "", email: "", emp: "", fullname: "", id: "",
               mobile: "", password: "", qualifications: "", skills: "", username: "", years: "" }
  constructor(private httpclientservice: DataService, private router: ActivatedRoute) { }

  username: string;
  ngOnInit() {

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