import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isUserLoggedIn$$ = new BehaviorSubject<boolean>(false);
  public isUserLoggedIn$;
  constructor(private router: Router) {
    this.isUserLoggedIn$ = this.isUserLoggedIn$$.asObservable();
  }

  createAuthtoken() {
    localStorage.setItem('auth', uuidv4());
  }

  onSubmit(formIsFilledIn: boolean) {
    if (formIsFilledIn) {
      this.createAuthtoken();
      this.isUserLoggedIn$$.next(true);
      this.router.navigate(['/youtube']);
    } else {
      alert("Please, fill in login and password!");
    }
  }

  onLogout() {
    if (localStorage.getItem('auth')) { localStorage.removeItem('auth'); }
    this.isUserLoggedIn$$.next(false);
    this.router.navigate(['/auth']);
  }

}
