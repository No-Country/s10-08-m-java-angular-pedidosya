import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { catchError, throwError } from 'rxjs';

import { SesionService } from '@services/sesion.service';
import { Sesion } from '@models/sesion';
import { UserModel } from '@models/user.model';
import { env } from 'src/environment/environment';
import { credencialesUsuario, respuestaAutenticacion, usuarioDTO } from '@models/seguridad';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

	apiUrl: string = env.apiURL; //'http://localhost:3000/users';
  // apiURL = environment.apiURL;
  private readonly keyToken = 'jwt';

  constructor(
    private sesion: SesionService,
    private httpClient: HttpClient
  ) { }

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

  // login1(data: any): Observable<Sesion>{
  //   // const urlLogin = `${env.authURL}/users`; /
  //   const urlLogin = `${env.apiURL}/auth/sign-in`;
  //   //return this.http.post(urlLogin, data).pipe(catchError(this.handleError));
  //   // return this.http.get<UserModel[]>(urlLogin).pipe(
  //   //   map((users: UserModel[]) => {
  //   //     let userValidated = users.find((u: UserModel) => u.email === data.email && u.password === data.password);

  //   //     if(userValidated){
  //   //       const sesion: Sesion = {
  //   //         sesionActiva: true,
  //   //         usuarioActivo: userValidated
  //   //       }

  //   //       return sesion 
  //   //     }else{
  //   //       const sesion: Sesion = {
  //   //         sesionActiva: false
  //   //       }

  //   //       return sesion
  //   //     }
  //   //   })
  //   // );
  // }  
  
	createUser(data: any): Observable<any> {
    // const urlSignUp = `${env.apiURL}/auth/registerClient`;
    const urlSignUp = this.apiUrl + '/auth/registerClient';

    console.log('createUser', urlSignUp);
		return this.httpClient.post(urlSignUp, data).pipe(catchError(this.handleError));
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
  
  // Felipe Gavilan  
  login(credenciales: any): Observable<respuestaAutenticacion>{
    const urlLogin = `${env.apiURL}/auth/sign-in`;
    return this.httpClient.post<respuestaAutenticacion>(urlLogin, credenciales);
  }
  // logout(){
  //   localStorage.removeItem(this.keyToken);
  // }
  // registrar(credenciales: credencialesUsuario): Observable<respuestaAutenticacion>{
  //   return this.httpClient.post<respuestaAutenticacion>(this.apiURL + '/crear', credenciales);
  // }

  // login(credenciales: credencialesUsuario): Observable<respuestaAutenticacion>{
  //   return this.httpClient.post<respuestaAutenticacion>(this.apiURL + '/login', credenciales);
  // }

  estaLogueado(): boolean{

    // const token = localStorage.getItem(this.keyToken);

    // if (!token){
    //   return false;
    // }

    // const expiracion = localStorage.getItem(this.llaveExpiracion);
    // const expiracionFecha = new Date(expiracion);

    // if (expiracionFecha <= new Date()){
    //   this.logout();
    //   return false;
    // }

    return true;
  }  


  setToken(respuestaAutenticacion: respuestaAutenticacion){
    localStorage.setItem(this.keyToken, respuestaAutenticacion.jwt)
  }

  getToken(){
    return localStorage.getItem(this.keyToken);
  }
  
  // obtenerCampoJWT(campo: string): string{
  //   const token = localStorage.getItem(this.keyToken);
  //   if (!token){return '';}
  //   var dataToken = JSON.parse(atob(token.split('.')[1]));
  //   return dataToken[campo];
  // }  
  

}
