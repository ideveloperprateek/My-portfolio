import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginSuccess = new BehaviorSubject<boolean>(false);
  private userSubject = new BehaviorSubject<any>(null);
  userSubject$ = this.userSubject.asObservable();
  url =
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyACOwz4YMiZodHhnn2Q2kBL5WZWYzyZE7Q';
  constructor(private http: HttpClient, private router: Router) {}

  signUp(email: string, password: string): Observable<any> {
    return this.http
      .post(this.url, {
        email,
        password,
        returnSecureToken: true,
      })
      .pipe(
        tap((response) => {
          this.loginSuccess.next(true);
        })
      );
  }
}
