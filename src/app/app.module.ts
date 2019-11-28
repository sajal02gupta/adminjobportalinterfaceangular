import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddJobComponent } from './add-job/add-job.component';
import { ViewJobComponent } from './view-job/view-job.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from "@angular/common/http";
import { UpdateJobComponent } from './update-job/update-job.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { HomeComponent } from './home/home.component';
import { JobdescriptionComponent } from './jobdescription/jobdescription.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AddJobComponent,
    ViewJobComponent,
    LoginComponent,
    UpdateJobComponent,
    EditprofileComponent,
    HomeComponent,
    JobdescriptionComponent,
    AdminloginComponent,
    ProfileComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
