import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobInfo } from '../JobInfo';
import { JobserviceService } from '../jobservice.service';
import { DataService } from '../data.service';
import { AcceptedEmployees } from '../accepted-employees';
import { Employee } from '../employee';

@Component({
  selector: 'app-jobdescription',
  templateUrl: './jobdescription.component.html',
  styleUrls: ['./jobdescription.component.css']
})
export class JobdescriptionComponent implements OnInit {
  id: string;
  username: string;
  d: JobInfo = { d: "", jobId: "", jobDescription: "", jobCategory: "", jobQualification: "", 
                jobSummary: "", jobTitle: "", jobType: "", primaryLocation: "", additionalLocation: "", 
                schedule: "", workEnvironment: "", recruiter: "", similarJobs: "", yearsofExperience: "" };
  
  emp: Employee={emp:"", empId:"",email:"",fullName:"",currentRole:"",password:"",
                  username:"",mobile:"",yearsofExperience:"",skills:"",qualifications:""};
  
  constructor(private Httpclient: JobserviceService, private router: ActivatedRoute, private Httpclientaemp: DataService, private route: Router) { }

  ngOnInit() {
    if(sessionStorage.getItem("username")==null){
      this.route.navigate([''])

    }

    this.router.params.subscribe(params => {
      this.id = params.id;
      this.username = params.username;
      console.log(params.id, params.username);
    });
    
    this.Httpclient.findByid(this.id).subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }

  handleSuccessfulResponse(response: JobInfo): void {
    console.log(response);
    console.log(response.jobId);
    
    this.d = response;
    console.log(this.d);
    
    console.log(this.d.jobId);
    
  }
  aEmp: AcceptedEmployees = { aEmp: "", empId:"", jobId: "", fullName: "", email: "", qualifications: "", skills: "", currentRole: "" , mobile: "", yearsofExperience: "", resume: "", photo: "" };
  
  applyforjob() {

    this.Httpclientaemp.getoneProfile(this.username).subscribe(response => this.handleresponse(response));
  }
  handleresponse(response: Employee): void {
    this.emp= response;
    this.aEmp.jobId= this.d.jobId;
    this.aEmp.empId=this.emp.empId;
    this.aEmp.fullName= this.emp.fullName;
    this.aEmp.email= this.emp.email;
    this.aEmp.qualifications= this.emp.qualifications;
    this.aEmp.skills= this.emp.skills;
    this.aEmp.currentRole= this.emp.currentRole;
    this.aEmp.mobile= this.emp.mobile;
    this.aEmp.yearsofExperience= this.emp.yearsofExperience;
    console.log(this.emp);
    console.log(this.aEmp);
    
    this.Httpclientaemp.createappliedemployee(this.aEmp).subscribe(data => {
      alert("Employee applied successfully");
    })
    
  }

}
