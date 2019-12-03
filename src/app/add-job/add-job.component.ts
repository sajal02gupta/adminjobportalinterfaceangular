import { Component, OnInit } from '@angular/core';
import { JobserviceService} from "../jobservice.service"
import { JobInfo } from "../JobInfo";
@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

  job: JobInfo= {d:"", jobId:"", jobCategory:"", jobDescription:"", jobQualification:"", jobSummary:"", jobTitle:"", jobType:"", primaryLocation:"", additionalLocation:"", schedule:"",recruiter:"", workEnvironment:"",yearsofExperience:"",similarJobs:""}
  constructor(private httpclientservice: JobserviceService) { }

  ngOnInit() {
  }

  createjob(): void {
    console.log(this.job)
    this.httpclientservice.createJob(this.job)
      .subscribe(data => {
        alert("Employee created successfully.");
      });
  }
}
