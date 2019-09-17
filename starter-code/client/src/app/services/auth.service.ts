import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable()
export class AuthService {
  options: object = { withCredentials: true };
  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private httpClient: HttpClient) { }

  handleError(e: any): Observable<never> {
    return throwError(e.message);
  }

  signup(user: any): Observable<HttpClient> {
    return this.httpClient.post(`${environment.BASE_URL}/signup`, user, this.options)
      .pipe(
        map((data: any) => data),
        catchError(this.handleError)
      );
  }

  login(user: any) {
    return this.httpClient.post(`${environment.BASE_URL}/login`, user, this.options)
      .pipe(
        map((data: any) => data),
        catchError(this.handleError)
      );
  }

  logout(): Observable<HttpClient> {
    return this.httpClient.post(`${environment.BASE_URL}/logout`, {}, this.options)
      .pipe(
        map((data: any) => data),
        catchError(this.handleError)
      );
  }

  isLoggedIn(): Observable<any> {
    return this.httpClient.get(`${environment.BASE_URL}/loggedin`, this.options)
      .pipe(
        map((data: any) => data),
        catchError(this.handleError)
      );
  }

}
