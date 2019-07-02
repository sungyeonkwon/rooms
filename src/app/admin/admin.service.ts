import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { catchError, tap } from 'rxjs/operators'
import { throwError, Subject } from 'rxjs'
import { Admin } from './admin.model';

export interface AdminResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({providedIn: 'root'})
export class AdminService {
  admin = new Subject<Admin>()

  constructor(private http: HttpClient) {}

  signIn(email: string, password: string){
    return this.http.post<AdminResponseData>(
      'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDBoUk35dz-r3ct3lShtwn91fE8MGGPfnM',
      {       
        email: email,
        password: password,
        returnSecureToken: true,
      }
    ).pipe(
      catchError(this.handleError), 
      tap(responseData => {
        this.handleAuthentication(
          responseData.email,
          responseData.localId,
          responseData.idToken,
          +responseData.expiresIn
        )
    }))
  }

  handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ){
    console.log("going to authenticate")
    const expirationDate = new Date(
      new Date().getTime() + expiresIn * 1000
    )
    const admin = new Admin(
      email,
      userId,
      token,
      expirationDate
    )
    // HERE TODO
    this.admin.next(admin)
  }

  handleError(errorResponse: HttpErrorResponse){
    let message = 'unknown error'
    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(errorResponse)
    }
    console.log("errorResponse.error.error.message", errorResponse.error.error.message)
    // TODO: is it the case of ajax? Not spitting out the message correcrlt.
    switch (errorResponse.error.error.message) {
      case 'EMAIL_NOT_FOUND':
        message = "Email is not valid"
        break;
      case 'INVALID_PASSWORD':
        message = "passward is invalid"
        break;
      case 'USER_DISABLED':
        message = "this user was disabled"
        break;
      default:
        message= "Interesting, I don't know what's wrong"
    }
    console.log("message", message)
    return throwError(message)
  }

}