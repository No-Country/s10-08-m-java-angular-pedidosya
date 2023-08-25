import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { SesionService } from '@services/sesion.service';
import { Sesion } from '@models/sesion';
import { UserModel } from '@models/user.model';
import { env } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private sesion: SesionService,
    private http: HttpClient
  ) { }

  login(user: UserModel): Observable<Sesion>{
    return this.http.get<UserModel[]>(`${env.authURL}/users`).pipe(
      map((users: UserModel[]) => {
        let userValidated = users.find((u: UserModel) => u.email === user.email && u.password === user.password);

        if(userValidated){
          const sesion: Sesion = {
            sesionActiva: true,
            usuarioActivo: userValidated
          }

          return sesion 
        }else{
          const sesion: Sesion = {
            sesionActiva: false
          }

          return sesion
        }
      })
    );
  }  
}
