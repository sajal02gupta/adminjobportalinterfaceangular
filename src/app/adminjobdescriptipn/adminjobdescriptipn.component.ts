import { Component, OnInit } from '@angular/core';
import { JobInfo } from '../JobInfo';
import { JobserviceService } from '../jobservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adminjobdescriptipn',
  templateUrl: './adminjobdescriptipn.component.html',
  styleUrls: ['./adminjobdescriptipn.component.css']
})
export class AdminjobdescriptipnComponent implements OnInit {
  id: string;
  d: JobInfo;
  constructor(private Httpclient: JobserviceService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.id=params.id;
      console.log(params.id);
    });
    this.Httpclient.findByid(this.id).subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }

  handleSuccessfulResponse(response: JobInfo): void {
    console.log(response);
    this.d=response;
  }


}
