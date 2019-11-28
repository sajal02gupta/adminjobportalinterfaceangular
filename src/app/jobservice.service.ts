import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { JobInfo } from "././JobInfo";

@Injectable({
  providedIn: 'root'
})
export class JobserviceService {
  

  constructor(private httpclient: HttpClient) { }

  getJob() {
    console.log("test call");
    return this.httpclient.get<JobInfo[]>('http://localhost:8080/viewjob');
  }
  
  public createJob(job:JobInfo) {
    console.log("Data entered successfully");
    return this.httpclient.post<JobInfo>("http://localhost:8080/addjob", job);
  }

  public deleteJob(job:JobInfo) {
    console.log("deleted");
    return this.httpclient.delete<JobInfo>("http://localhost:8080/deletejob" + "/" + job.jobId);
  }

  public updateJob(job: JobInfo) {
    console.log("updated");
    return this.httpclient.put<JobInfo>("http://localhost:8080/jobinfo/updatejob/"+job.jobId, job);
  }

  findByid(id: string) {
    return this.httpclient.get<JobInfo>("http://localhost:8080/findById"+"/"+id)
  }
}
