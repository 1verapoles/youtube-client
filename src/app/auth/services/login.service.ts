import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }

  createAuthtoken() {
    localStorage.setItem('auth', uuidv4());
  }

  onSubmit(formIsFilledIn: boolean) {
    if (formIsFilledIn) {
      this.createAuthtoken();
      this.router.navigate(['/youtube']);
    } else {
      alert("Please, fill in login and password!");
    }
  }

  onLogout() {
    if (localStorage.getItem('auth')) { localStorage.removeItem('auth'); }
    this.router.navigate(['/auth']);
  }

}
