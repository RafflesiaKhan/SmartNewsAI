import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {UserregistrationService} from './../../services/userregistration.service';
import {AlertService} from '../../services/alert.service';
import { Router } from '@angular/router';
import {SessionstorageService} from "../../services/sessionstorage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserregistrationService, AlertService, SessionstorageService]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(fb: FormBuilder, private _registrationService: UserregistrationService,
              private alertService: AlertService, private router: Router,
              private _sessionServicr: SessionstorageService) {
    this.loginForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)

    });


    // tracks changes to the form input data
    this.loginForm.valueChanges.subscribe(
      (form: any) => {
      }
    );
  }

  ngOnInit() {
  }

  login(form: any, isValid: boolean): void {
    console.log('you submitted value:', form);

    this._registrationService.get(form.userName)
      .subscribe(
        data => {
          if(data.password === form.password) {
            this._sessionServicr.save('currentuser', data);
            this.alertService.success('Login successful', true);
            this.router.navigate(['/home/preference']);
          } else {
            this.alertService.error('Login failed');
          }
        },
        error => {
          this.alertService.error(error);
        });
  }
}
