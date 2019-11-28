import { Component, OnInit } from '@angular/core';
import { JobserviceService} from "../jobservice.service"
import { JobInfo } from "../JobInfo";
@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

  job: JobInfo= new JobInfo("","","","","","","","","",[],"","", "",""); 
  qualifications:string[] = ["", "", ""];

  constructor(private httpclientservice: JobserviceService) { }

  ngOnInit() {
  }

  createjob(): void {
    console.log(this.job)
    this.job.jobQualification = this.qualifications;
    this.httpclientservice.createJob(this.job)
      .subscribe(data => {
        alert("Employee created successfully.");
      });
  }
}
