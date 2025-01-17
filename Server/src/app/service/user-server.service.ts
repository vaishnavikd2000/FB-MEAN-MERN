import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { catchError } from 'rxjs/operators'; // Add catchError for error handling
// import { throwError } from 'rxjs'; // To propagate errors

@Injectable({
  providedIn: 'root',
})
export class UserServerService {
  private URL = 'http://localhost:3000/users'; // JSON Server URL

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(this.URL);
  }

  // getData(): Observable<any[]> {
  //   return this.http.get<any[]>(this.URL).pipe(
  //     catchError(this.handleError) // Handle any errors in the response
  //   );
  // }

  insertedData(user: any): Observable<any> {
    return this.http.post(this.URL, user);
  }

  // insertedData(user: any): Observable<any> {
  //   return this.http.post<any>(this.URL, user).pipe(
  //     catchError(this.handleError) // Handle any errors in the response
  //   );
  // }

  updateUserData(id: any, user: any): Observable<any> {
    return this.http.put(`${this.URL}/${id}`, user);
  }

  // updateUserData(id: number, user: any): Observable<any> {
  //   return this.http.put<any>(`${this.URL}/${id}`, user).pipe(
  //     catchError(this.handleError) // Handle any errors in the response
  //   );
  // }

  deleteUserData(id: any): Observable<any> {
    return this.http.delete(`${this.URL}/${id}`);
  }

  // deleteUserData(id: number): Observable<any> {
  //   return this.http.delete<any>(`${this.URL}/${id}`).pipe(
  //     catchError(this.handleError) // Handle any errors in the response
  //   );
  // }

  //  // Centralized error handling method
  //  private handleError(error: any): Observable<never> {
  //   console.error('An error occurred:', error); // Log the error to the console
  //   return throwError('Something went wrong, please try again later.'); // Return an observable with a user-friendly message
  // }
  
}
