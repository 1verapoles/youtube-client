import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginValue: undefined | string = undefined;
  passwordValue: undefined | string = undefined;

  constructor(private router: Router) { }

  createAuthtoken() {
    localStorage.setItem('auth', uuidv4());
  }

  onLoginChange(inputValue: string) {
    this.loginValue = inputValue;
  }

  onPasswordChange(inputValue: string) {
    this.passwordValue = inputValue;
  }

  onSubmit() {
    if (this.loginValue && this.passwordValue) {
      this.createAuthtoken();
      this.router.navigate(['/youtube']);
    } else {
      alert("Please, fill in login and password!");
    }
  }

}
