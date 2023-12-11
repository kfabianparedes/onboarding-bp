import { Component } from '@angular/core';
import { LoginFormService } from '../../services/form-service/login-form.service';
import { AlertService } from 'src/app/shared/services/event/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    public loginFormService: LoginFormService, 
    public alertService:AlertService
  ){ }

  signin(): void {
    this.loginFormService.submitForm();
  }
  
}
