import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MyprofileComponent } from './pages/myprofile/myprofile.component';
import { RegisterComponent } from './pages/register/register.component';
import { Page404Component } from './pages/page404/page404.component';
import { Page500Component } from './pages/page500/page500.component';
import {AppRouterModule} from './app-router';
import { MypreferenceComponent } from './pages/mypreference/mypreference.component';
import { QuestionComponent } from './components/question/question.component';
import { NewsportalComponent } from './pages/newsportal/newsportal.component';
import { RatinginputsComponent } from './components/ratinginputs/ratinginputs.component';
import { CardComponent } from './components/card/card.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NewscardComponent } from './newscard/newscard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    MyprofileComponent,
    RegisterComponent,
    Page404Component,
    Page500Component,
    MypreferenceComponent,
    QuestionComponent,
    NewsportalComponent,
    RatinginputsComponent,
    CardComponent,
    NewscardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
