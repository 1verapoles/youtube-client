import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: LoginService) { }


  onLoginChange(inputValue: string) {
    this.loginService.onLoginChange(inputValue);
  }

  onPasswordChange(inputValue: string) {
    this.loginService.onPasswordChange(inputValue);
  }

  onSubmit() {
    this.loginService.onSubmit();
  }

}
