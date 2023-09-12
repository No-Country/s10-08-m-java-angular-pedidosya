import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

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
export class LoginComponent implements OnInit /*,OnDestroy */{

  suscripcion!: Subscription;

  loginForm!: FormGroup;
  loading!: boolean;

  // socialUser!: SocialUser;
  isLoggedin?: boolean;  
  
  constructor(
    private authService: AuthService,
    private router: Router,
    private authStore: Store<AuthState>,
    private toastrService: ToastrService
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
    if (this.suscripcion)
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
      this.suscripcion = this.authService.login(data).subscribe(
        (response: any) => {
        //  
            console.log('jwt', response.jwt);
            this.authService.setToken(response);
            this.router.navigate(['home']);
      }, // errores => console.log('LOGIN FAILED', errores.error.detail));
			  (error: any) => {
				    this.toastrService.error('Login Failed', error.detail);
            console.log('LOGIN FAILED', error)
			  }
      );      

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
