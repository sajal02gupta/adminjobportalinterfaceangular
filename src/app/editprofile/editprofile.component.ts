import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  username: string;
  emp: Employee;

  constructor(private HttpCient: DataService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(params => this.username= params.username)

    this.HttpCient.getoneProfile(this.username).subscribe(response => this.emp= response)
  }
  

}
