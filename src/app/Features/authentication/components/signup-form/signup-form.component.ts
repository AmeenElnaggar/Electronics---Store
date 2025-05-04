import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthenticationService } from '../../services/auth.service';
@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe, RouterLink],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css',
})
export class SignupFormComponent {
  private authenticationService = inject(AuthenticationService);

  isError$: Observable<any> = this.authenticationService.signupError$;
  isSuccess$: Observable<any> = this.authenticationService.signupSuccess$;

  myForm = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required],
    }),

    email: new FormControl('', {
      validators: [
        Validators.required,
        Validators.email,
        Validators.maxLength(50),
      ],
    }),

    passwords: new FormGroup(
      {
        password: new FormControl('', {
          validators: [Validators.required, Validators.minLength(1)],
        }),
        confirmPassword: new FormControl('', {
          validators: [Validators.required, Validators.minLength(1)],
        }),
      },
      {
        validators: [
          this.authenticationService.equalValues('password', 'confirmPassword'),
        ],
      }
    ),

    age: new FormControl('', {
      validators: [Validators.required, Validators.maxLength(3)],
    }),

    terms: new FormControl(false, {
      validators: [Validators.requiredTrue],
    }),
  });

  onSubmit() {
    this.authenticationService.submitSignup(this.myForm);
  }

  get emailIsInvalid() {
    return this.authenticationService.controlFieldIsInvalid(
      this.myForm,
      'email'
    );
  }

  get passwordsIsEqual() {
    return (
      !this.myForm.controls.passwords.valid &&
      this.myForm.controls.passwords.controls.confirmPassword.dirty
    );
  }
}
