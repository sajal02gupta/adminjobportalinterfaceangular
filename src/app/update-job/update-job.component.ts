import { Component, OnInit } from '@angular/core';
import { JobserviceService } from "./../jobservice.service";
import { JobInfo } from '../JobInfo';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-job',
  templateUrl: './update-job.component.html',
  styleUrls: ['./update-job.component.css']
})
export class UpdateJobComponent implements OnInit {

  j: JobInfo= new JobInfo("","","","","","","","","","","","","","");
  id: string;
  constructor(private httpclientservice: JobserviceService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe( params => this.id= params.id);
    console.log(this.id);
    
   }
   
  ngOnInit() {
    this.httpclientservice.findByid(this.id).subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }
  handleSuccessfulResponse(response: JobInfo): void {
    console.log(response)
    this.j = response;
  }

  updateJob(job: JobInfo){
    this.httpclientservice.updateJob(job)
    .subscribe(data => {
      alert("Job updated successfully");
      this.router.navigateByUrl('admin/viewjob');
    }); 
}
}
