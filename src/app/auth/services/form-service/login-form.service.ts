import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PasswordSigninControl } from 'src/app/shared/controls/signin/password-login-control';
import { UsernameSigninControl } from 'src/app/shared/controls/signin/username-signin-control';
import { AuthClientService } from '../client-service/auth-client.service';
import { SigninService } from '../signin.service';
import { AlertService } from 'src/app/shared/services/event/alert.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginFormService {
  signInForm!: FormGroup;

  private _username = new UsernameSigninControl(this._authService);
  private _password = new PasswordSigninControl();

  constructor(
    private formBuilder: FormBuilder,
    private _authService: AuthClientService,
    private _signinService: SigninService,
    private _alertService: AlertService,
    private _router: Router
  ) {
    this.buildForm();
  }

  submitForm() {
    if (this.signInForm.invalid) {
      this.signInForm.markAllAsTouched();
      return;
    }else {
      const username = this.username.value;
      const password = this.password.value;
      this._signinService.signin(username,password).subscribe({
        next: (success)=>{
          console.log('Success: ',success);
          this._alertService.showSuccessAlert('Inicio de sesión exitoso', '¡Bienvenido de nuevo!');
          setTimeout(() => {
            this._router.navigate(['signup']);
          }, 3000);

        },
        error: (error)=>{
          console.log('Error: ',error);
          this._alertService.showErrorAlert('Error de inicio de sesión', error.message);
        }
      });
    }
  }

  buildForm() {
    this.signInForm = this.formBuilder.group({
      username: this._username,
      password: this._password,
    })
  }

  get username(): UsernameSigninControl {
    return this.signInForm.get('username') as UsernameSigninControl;
  }

  get password(): PasswordSigninControl {
    return this.signInForm.get('password') as PasswordSigninControl;
  }
  
}
