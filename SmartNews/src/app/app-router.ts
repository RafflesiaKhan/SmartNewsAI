import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Page404Component} from './pages/page404/page404.component';
import {Page500Component} from './pages/page500/page500.component';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {MyprofileComponent} from './pages/myprofile/myprofile.component'
import {HomeComponent} from './pages/home/home.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {MypreferenceComponent} from './pages/mypreference/mypreference.component'

export const routes: Routes  = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent ,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'preference', component: MypreferenceComponent },
      { path: 'profile', component: MyprofileComponent }
    ]},
  { path: 'register', component: RegisterComponent },

  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouterModule {}
