import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import {SignupComponent} from './pages/signup/signup.component';
import {LoginComponent} from './pages/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { MenteeComponent } from './pages/user/mentee/mentee.component';
import { MentorComponent } from './pages/user/mentor/mentor.component';
import { AdminGuard } from './services/admin.guard';
import { UserGuard } from './services/user.guard';
import { ProfileComponent } from './pages/user/user-dashboard/user-dashboard-components/profile/profile.component';
import { RegisterMentorComponent } from './pages/user/user-dashboard/user-dashboard-components/register-mentor/register-mentor.component';
import { MentorGuard } from './services/mentor.guard';
import { ScheduleComponent } from './pages/user/mentor/mentorcomponents/schedule/schedule.component';
import { AllmenteeComponent } from './pages/user/mentor/mentorcomponents/allmentee/allmentee.component';
import { MentorprofileComponent } from './pages/user/mentor/mentorcomponents/mentorprofile/mentorprofile.component';
import { RequestsComponent } from './pages/user/mentor/mentorcomponents/requests/requests.component';
import { FindmentorComponent } from './pages/user/findmentor/findmentor.component';
const routes:Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full',
  },
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full',
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full',
  },
  {
    path:'admin',
    component:DashboardComponent,
    pathMatch:'full',
    canActivate:[AdminGuard],
  },
  {
    
    path:'user',
    component:UserDashboardComponent,
    
    canActivate:[UserGuard],
    children: [
      {
        path: 'profile', // child route path
        component: ProfileComponent, // child route component that the router renders
        pathMatch:'full',
      },
      {
        path: 'registermentor',
        component: RegisterMentorComponent, // another child route component that the router renders
        pathMatch:'full',
      },
      {
        path: '', // child route path
        component: ProfileComponent, // child route component that the router renders
      },
    ],
  },
  {
    path:'mentee',
    component:MenteeComponent,
    pathMatch:'full',
  },
  {
    path:'mentor',
    component:MentorComponent,
    canActivate:[UserGuard,MentorGuard],
    children: [
      {
        path: 'mentorprofile', // child route path
        component: MentorprofileComponent, // child route component that the router renders
        pathMatch:'full',
      },
      {
        path: 'allmentee',
        component: AllmenteeComponent, // another child route component that the router renders
        pathMatch:'full',
      },
      {
        path: 'schedule',
        component: ScheduleComponent, // another child route component that the router renders
        pathMatch:'full',
      },
      
      {
        path: 'requests', // child route path
        component: RequestsComponent, // child route component that the router renders
      },
      {
        path: '', // child route path
        component: MentorprofileComponent, // child route component that the router renders
      },
    ],
    
  },
  {
    path: 'mentors/all', // child route path
    component:FindmentorComponent, // child route component that the router renders
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule],
  declarations: [],
  
})
export class AppRoutingModule { }
