import { Component, OnInit, Input } from '@angular/core';
import { JobInfo } from '../JobInfo';
import { JobserviceService } from "../jobservice.service";

@Component({
  selector: 'app-view-job',
  templateUrl: './view-job.component.html',
  styleUrls: ['./view-job.component.css']
})
export class ViewJobComponent implements OnInit {

  job: JobInfo[];
  constructor(private httpclientservice: JobserviceService) { }

  ngOnInit() {
    this.httpclientservice.getJob().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }
  handleSuccessfulResponse(response: JobInfo[]): void {
    console.log(response)
    this.job = response;
  }

  deleteJob(job: JobInfo): void {
    this.httpclientservice.deleteJob(job)
      .subscribe( data => {
        this.job = this.job.filter(u => u !== job);
      })
  };
}
