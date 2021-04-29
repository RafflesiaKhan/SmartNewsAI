import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {UserregistrationService} from './../../services/userregistration.service';
import {AlertService} from '../../services/alert.service';
import { Router } from '@angular/router';
import {SessionstorageService} from "../../services/sessionstorage.service";

@Component({
  selector: 'app-mypreference',
  templateUrl: './mypreference.component.html',
  styleUrls: ['./mypreference.component.css'],
  providers:[UserregistrationService, AlertService, SessionstorageService]
})
export class MypreferenceComponent implements OnInit {
  questionno = 0;
  images=[];
  getstarted:boolean;
  mypreference={
    age: 0,
    sex: '',
    location: '',
    education: '',
    sports: 0,
    health: 0,
    finance: 0,
    entertainment: 0
  };
  categories=[];
  sources =[];

  myprefereceForm: FormGroup;
  constructor(fb: FormBuilder, private _registrationService: UserregistrationService,
              private alertService: AlertService, private router: Router,
              private _sessionServicr: SessionstorageService) {

    this.myprefereceForm = new FormGroup({
      ageGroup: new FormControl('', Validators.required),
      locationGroup: new FormControl('', Validators.required),
      sexGroup: new FormControl('', Validators.required),
      educationGroup: new FormControl('', Validators.required),
      sportsRating: new FormControl(),
      financeRating: new FormControl(),
      healthRating: new FormControl(),
      entertainmentRating: new FormControl(),
      internationalRating: new FormControl(),
      BBCrating: new FormControl(),
      AlZajeerarating: new FormControl(),
      NeyworkTimesrating: new FormControl()
    });

    // tracks changes to the form input data
    this.myprefereceForm.valueChanges.subscribe(
      (form: any) => {
      }
    );
  }

  ngOnInit() {
    this.mypreference = {
      age: 0,
      sex: '',
      location: '',
      education: '',
      sports: 0,
      health: 0,
      finance: 0,
      entertainment: 0
    };
    this.getstarted = false;

    this.categories =[ {name: 'sports', ratings: 0}, {name:'finance',ratings:0},
      {name:'health', rating:0},{name: 'entertainment', rating:0},{name:'international',rating:0}];
    this.sources = ['BBC', 'AlZajeera', 'NeyworkTimes']
  }



  next() {
    this.questionno ++;
    console.log(this.mypreference)
  }

  save(form: any, isValid: boolean): void {
    let username ='Summer';
    if(this._sessionServicr.get('currentuser')){
      username =  this._sessionServicr.get('currentuser').userName;
    }

   const pref = {
     mypreference : form
   };
    this._registrationService.post( username, pref);
     /* .subscribe(
        data => {
          this.alertService.success('My preferece update successful', true);
          this.router.navigate(['/home']);
        },
        error => {
          this.alertService.error(error);
        });*/
  }

}
