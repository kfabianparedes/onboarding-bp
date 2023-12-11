import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { AuthClientService } from '../client-service/auth-client.service';
import { UsernameSignupControl } from 'src/app/shared/controls/signup/username-signup-control';
import { PasswordSigninControl } from 'src/app/shared/controls/signin/password-login-control';
import { EmailSignUpControl } from 'src/app/shared/controls/signup/email.signup-control';
import { ConfirmPasswordSignupControl } from 'src/app/shared/controls/signup/confirm-password-signup-control';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  signUpForm!: FormGroup;

  private _username = new UsernameSignupControl(this._authService);
  private _email = new EmailSignUpControl();
  private _password = new PasswordSigninControl();
  private _confirmPassword = new ConfirmPasswordSignupControl(this._password);
  private _categories = this.formBuilder.array([]);

  constructor(
    private formBuilder: FormBuilder,
    private _authService: AuthClientService,
  ) {
    this.buildForm();
  }

  submitForm() {
    if (this.signUpForm.invalid) {
      this.signUpForm.markAllAsTouched(); 
      return;
    } else {
      // const username = this.username.value;
      // const email = this.email.value;
      // const password = this.password.value;
      // const confirmPassword = this.confirmPassword.value;
      // const selectedCategories = this.categories.value;
      return
    }
  }

  buildForm() {
    this.signUpForm = this.formBuilder.group({
      username: this._username,
      email: this._email,
      password: this._password,
      confirmPassword: this._confirmPassword,
      categories: this._categories,
    });
  }

  get username(): UsernameSignupControl {
    return this.signUpForm.get('username') as UsernameSignupControl;
  }

  get email(): EmailSignUpControl {
    return this.signUpForm.get('email') as EmailSignUpControl;
  }

  get password(): PasswordSigninControl {
    return this.signUpForm.get('password') as PasswordSigninControl;
  }

  get confirmPassword(): ConfirmPasswordSignupControl {
    return this.signUpForm.get('confirmPassword') as ConfirmPasswordSignupControl;
  }

  get categories(): FormArray {
    return this.signUpForm.get('categories') as FormArray;
  }

}
