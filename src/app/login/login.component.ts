import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Login } from '../Login';
import { DataService } from '../data.service';
import { FormsModule } from "@angular/forms";
import { Employee } from '../employee';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  flag: number;
  emplogin: Login = new Login("", "");
  emp: Employee = { currentrole: "", email: "", emp: "", fullname: "", id: "",
               mobile: "", password: "", qualifications: "", skills: "", username: "", years: "" }
  username: string;
  password: string;
  constructor(private formbuilder: FormBuilder, private httpclientservice: DataService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formbuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    console.log('login form');
    console.log(typeof this.loginForm.value.username);


    this.httpclientservice.getoneProfile(this.loginForm.value.username).subscribe(response => {
      console.log('response');
      console.log(response);
      this.emp = response
      console.log(this.emp);

    this.username = this.loginForm.value.username
    this.password=this.loginForm.value.password

    console.log('comparing');
    
    console.log('emp' + this.emp.username);
    console.log(this.username);
    
    console.log(this.emp.username === this.username);
    console.log('comparing');
    if ((this.emp.username === this.username) && (this.emp.password === this.password)) {
      alert("Login successful")
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['profile/' + this.emp.username]);
      });
      console.log(this.loginForm.value);
      this.flag = 1
    } else {
      alert("invalid details");
    }
    }, error => {
      alert('server error.cannot login')
    });
    
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    //this.validatelogin();
    // display form values on success

    //get emp based on username
    //check if emp is null
    //if not null check if password matches
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.loginForm.reset();
  }

}