import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { RegisterEmployee } from '../register-employee';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  register: RegisterEmployee = new RegisterEmployee("", "", "", "");

  constructor(private formbuilder: FormBuilder, private httpclientservice: DataService) { }

  registeremployee(): void {
    console.log("test call");
    this.httpclientservice.registerEmployee(this.register).subscribe(data => { alert("Employee registered successfully") })
  }

  ngOnInit() {
    this.registerForm = this.formbuilder.group({
      jobID: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]

    }
    );

  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.registeremployee();

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));

  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }


}