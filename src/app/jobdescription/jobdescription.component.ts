import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobInfo } from '../JobInfo';
import { JobserviceService } from '../jobservice.service';

@Component({
  selector: 'app-jobdescription',
  templateUrl: './jobdescription.component.html',
  styleUrls: ['./jobdescription.component.css']
})
export class JobdescriptionComponent implements OnInit {
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
