import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { UserModel } from '@models/user.model';
import { credencialesUsuario, respuestaAutenticacion, usuarioDTO } from '@models/seguridad';

import { AuthService } from '../../services/auth.service';
import { cargarSesion } from '../../state/auth.actions';
import { AuthState } from '../../state/auth.reducer';

interface DTOLogin {
	email: string,
	password: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../shared-auth-styles.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  // formulario!: FormGroup;
  suscripcion!: Subscription;

  loginForm!: FormGroup;
  loading!: boolean;
  
  constructor(
    private authService: AuthService,
    private router: Router,
    private authStore: Store<AuthState> 
  ){}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnDestroy(): void {
    //this.suscripcion.unsubscribe();
  } 
  
  login1(){
    const data: DTOLogin = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };

    let user: UserModel = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
      idUser: 0,
      rol: ''
    }
    
    this.loading = true;
    // this.suscripcion = this.authService.login(data).subscribe((sesion: Sesion) => {
    //   this.authStore.dispatch(cargarSesion({ sesion: sesion }));
    //   console.log('LOGIN', 'Login  ok')
    //   this.router.navigate(['auth/login']);
    // });
  }
  
    // Felipe Gavilan
    // login(credenciales: credencialesUsuario){
    login(){
      const data: DTOLogin = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      };
      this.authService.login(data)
      .subscribe(respuesta => {
        // console.log('respuesta', respuesta.jwt);
        this.authService.setToken(respuesta);
        this.router.navigate(['home']);
      }, errores => console.log('LOGIN FAILED', errores.error.detail));
      // }, errores => this.errores = parsearErroresAPI(errores));
    }

    // this.AuthService.createUser(data).subscribe(
		// 	(response: any) => {
		// 		// this.toastrService.success('Signup Success', user.firstname + ', you are welcome');
    //     		console.log('okey', 'Register  ok')
		// 		this.router.navigate(['auth/login']);
		// 	},
		// 	(error: any) => {
    //     		console.log('failed', error.message);
		// 		// this.toastrService.error('Signup Failed', error.message);
		// 	}
		// );  

}
