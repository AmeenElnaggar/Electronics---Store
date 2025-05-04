import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  private authenticationService = inject(AuthenticationService);

  isError$: Observable<any> = this.authenticationService.loginError$;

  myForm = new FormGroup({
    email: new FormControl('', {
      validators: [
        Validators.required,
        Validators.email,
        Validators.maxLength(30),
      ],
    }),
    password: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(30),
      ],
    }),
  });

  get emailIsInvalid() {
    return this.authenticationService.controlFieldIsInvalid(
      this.myForm,
      'email'
    );
  }

  onSubmit() {
    this.authenticationService.submitLogin(this.myForm);
  }
}
