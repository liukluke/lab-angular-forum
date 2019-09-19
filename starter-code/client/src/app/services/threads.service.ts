import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable()
export class ThreadsService {
  options: object = { withCredentials: true };
  constructor(private httpClient: HttpClient) { }

  handleError(e: any): Observable<never> {
    return throwError(e.message);
  }

  newThread(thread: any): Observable<HttpClient> {
    return this.httpClient.post(`${environment.BASE_URL}/threads/`, thread, this.options)
      .pipe(
        map((data: any) => data),
        catchError(this.handleError)
      );
  }

  getThreads(): Observable<any> {
    return this.httpClient.get(`${environment.BASE_URL}/threads/`)
      .pipe(
        map((data: any) => data),
        catchError(this.handleError)
      );
  }

  getSigleThread(id: any): Observable<any> {
    return this.httpClient.get(`${environment.BASE_URL}/threads/${id}`)
      .pipe(
        map((data: any) => data),
        catchError(this.handleError)
      );
  }
}
