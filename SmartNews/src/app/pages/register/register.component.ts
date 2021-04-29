import { Component, OnInit, EventEmitter ,Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {UserregistrationService} from './../../services/userregistration.service';
import {AlertService} from '../../services/alert.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[UserregistrationService, AlertService]
})
export class RegisterComponent implements OnInit {
  userregistrationForm: FormGroup;
  @Output() onFormSubmit  = new EventEmitter();


  constructor(fb: FormBuilder, private _registrationService: UserregistrationService,
      private alertService: AlertService, private router: Router) {
    this.userregistrationForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      password2: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      name: new FormControl(),
      age: new FormControl()
    });

    // tracks changes to the form input data
    this.userregistrationForm.valueChanges.subscribe(
      (form: any) => {
      }
    );
  }

  ngOnInit() {
  }


  save(form: any, isValid: boolean): void {
    console.log('you submitted value:', form);

    this._registrationService.put(form)
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
        });
  }
}
