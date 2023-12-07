import { Component } from '@angular/core';

@Component({
  selector: 'pichincha-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {


  registerUser(): void {
    console.log('register user');
  }
}
