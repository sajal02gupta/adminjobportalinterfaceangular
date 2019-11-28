import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  loginForm:FormGroup;
  submitted=false;

  constructor(private formbuilder:FormBuilder) { }


    ngOnInit() {
      this.loginForm=this.formbuilder.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      }
      );

    }
   
   
   get f(){return this.loginForm.controls;}

   onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
}

onReset() {
    this.submitted = false;
    this.loginForm.reset();
}

}
