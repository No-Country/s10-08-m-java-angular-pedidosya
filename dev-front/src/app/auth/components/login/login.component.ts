import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { userCredentials } from '@models/dtos.model';

import { AuthService } from '../../services/auth.service';
import { cargarSesion } from '../../state/auth.actions';
import { AuthState } from '../../state/auth.reducer';

// import { SocialAuthService, GoogleLoginProvider, SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../shared-auth-styles.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  suscripcion!: Subscription;

  loginForm!: FormGroup;
  loading!: boolean;

  // socialUser!: SocialUser;
  isLoggedin?: boolean;  
  
  constructor(
    private authService: AuthService,
    private router: Router,
    private authStore: Store<AuthState> ,
    // private socialAuthService: SocialAuthService
  ){}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });

    // this.socialAuthService.authState.subscribe((user) => {
    //   this.socialUser = user;
    //   this.isLoggedin = user != null;
    //   console.log(this.socialUser);
    // });    
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  } 
  
  loginWithGoogle(): void {
    // this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logOut(): void {
    // this.socialAuthService.signOut();
  }   
  
    // login(credenciales: credencialesUsuario){
  login(){
      const data: userCredentials = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      };
      this.suscripcion = this.authService.login(data)
      .subscribe(respuesta => {
        console.log('jwt', respuesta.jwt);
        this.authService.setToken(respuesta);
        this.router.navigate(['home']);
      }, errores => console.log('LOGIN FAILED', errores.error.detail));

  }

    // this.AuthService.userRegistration(data).subscribe(
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
