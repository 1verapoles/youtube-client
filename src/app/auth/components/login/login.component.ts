import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: LoginService) { }

  login: string = '';
  password: string = '';

  onSubmit(form: NgForm) {
    if (form.value.login.trim() && form.value.password.trim()) {
      this.loginService.onSubmit(true);
    } else {
      this.loginService.onSubmit(false);
    }
  }

}
