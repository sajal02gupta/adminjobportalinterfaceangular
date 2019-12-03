import { Component, OnInit } from '@angular/core';
import { JobserviceService } from '../jobservice.service';
import { JobInfo } from '../JobInfo';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  job: JobInfo[];
  username: string;
  constructor(private httpclientservice: JobserviceService, private router: ActivatedRoute, private route:Router) { }

  ngOnInit() {
    if(sessionStorage.getItem("username")==null){
      this.route.navigate([''])

    }

    this.router.params.subscribe(params => {
      this.username=params.username;
      console.log(params.username); 
    });

    this.httpclientservice.getJob().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }

  handleSuccessfulResponse(response: JobInfo[]): void {
    console.log(response)
    this.job = response;
  }

}
