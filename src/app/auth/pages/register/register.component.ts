import { Component } from '@angular/core';
import { AlertService } from 'src/app/shared/services/event/alert.service';
import { SignupService } from '../../services/form-service/signup.service';

@Component({
  selector: 'pichincha-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(
    public signupService: SignupService, 
    public alertService:AlertService
  ){ }

  registerUser(): void {
    this.signupService.submitForm();
  }
}
