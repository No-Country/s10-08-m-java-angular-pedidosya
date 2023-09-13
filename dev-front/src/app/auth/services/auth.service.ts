import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { catchError, throwError } from 'rxjs';

import { SesionService } from '@services/sesion.service';
import { Sesion } from '@models/sesion';
import { UserModel } from '@models/user.model';
import { env } from 'src/environment/environment';
import { responseAuthentication } from '@models/dtos.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

	apiUrl: string = env.apiURL; //'http://localhost:3000/';
  private readonly keyToken = 'jwt';

  constructor(
    private sesion: SesionService,
    private httpClient: HttpClient
  ) { }

	userRegistration(data: any): Observable<any> {
    // const urlSignUp = `${env.apiURL}/auth/registerClient`;
    const urlSignUp = this.apiUrl + '/auth/registerClient';
		return this.httpClient.post(urlSignUp, data).pipe(catchError(this.handleError));
	}
  
  login(credenciales: any): Observable<responseAuthentication>{
    const urlLogin = `${env.apiURL}/auth/sign-in`;
    return this.httpClient.post<responseAuthentication>(urlLogin, credenciales);
  }

  logout(){
    localStorage.removeItem(this.keyToken);
  }

  isLogued(): boolean{
    return this.getToken() ? true : false;
  }  

  setToken(responseAut: responseAuthentication){
    localStorage.setItem(this.keyToken, responseAut.jwt)
  }

  getClientInfo(): Observable<any>{
    const urlClient = this.apiUrl + '/clients/user';
    let auth_token = this.getToken();
  
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      });
  
    const requestOptions = { headers: headers };

    return this.httpClient
      .get(urlClient, requestOptions)
 

  }

  clientUpdate(data: any): Observable<any> {
    const url = this.apiUrl + '/clients/update';
    console.log('url:', url);
		// return this.httpClient.put(url, data).pipe(catchError(this.handleError));
    let auth_token = this.getToken();
  
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      });
  
    const requestOptions = { headers: headers };

    return this.httpClient
      .put(url, data, requestOptions)    
	}

  getToken(){
    return localStorage.getItem(this.keyToken);
  }

	// Handle API errors
	handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			console.error('An error occurred:', error.error.message);
		} else {
			console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
		}
		return throwError('Something bad happened; please try again later.');
	} 

  // login(user: UserModel): Observable<Sesion>{
  //   const urlLogin = `${env.authURL}/users`;
  //   return this.http.get<UserModel[]>(urlLogin).pipe(
  //     map((users: UserModel[]) => {
  //       let userValidated = users.find((u: UserModel) => u.email === user.email && u.password === user.password);
  //       if(userValidated){
  //         const sesion: Sesion = {
  //           sesionActiva: true,
  //           usuarioActivo: userValidated
  //         }
  //         return sesion 
  //       }else{
  //         const sesion: Sesion = {
  //           sesionActiva: false
  //         }
  //         return sesion
  //       }
  //     })
  //   );
  // }

  
}
