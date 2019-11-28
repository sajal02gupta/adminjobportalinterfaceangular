import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddJobComponent } from './add-job/add-job.component';
import { ViewJobComponent } from './view-job/view-job.component';
import { UpdateJobComponent } from "./update-job/update-job.component";
import { EditprofileComponent } from './editprofile/editprofile.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { JobdescriptionComponent } from './jobdescription/jobdescription.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

const routes: Routes = [
  {path: 'admin/viewjob', component: ViewJobComponent},
  {path: '', pathMatch:'full', component: LoginComponent},
  {path: 'admin/login', component:AdminloginComponent},
  {path: 'admin/addjob', component:AddJobComponent},
  {path: 'admin/viewjob', component: ViewJobComponent},
  {path: 'admin/updatejob/:id', component:UpdateJobComponent},
  {path:'home/:username', component:HomeComponent},
  {path:'profile/:username',component:ProfileComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'edit/:username',component:EditprofileComponent},
  {path:'jobdescription/:id',component:JobdescriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
