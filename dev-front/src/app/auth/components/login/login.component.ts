import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { UserModel } from '@models/user.model';
import { LoginService } from '../../services/login.service';
import { cargarSesion } from '../../state/auth.actions';
import { AuthState } from '../../state/auth.reducer';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  formulario!: FormGroup;
  suscripcion!: Subscription;

  loginForm!: FormGroup;
  loading!: boolean;
  
  constructor(
    private loginService: LoginService,
    private router: Router,
    private authStore: Store<AuthState> 
  ){}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  } 
  
  login(){
    let user: UserModel = {
      email: this.formulario.value.email,
      password: this.formulario.value.password,
      isAdmin: false,
      id: 0,
      firstname: '',
      lastname: ''
    }
    this.loading = true;
    this.suscripcion = this.loginService.login(user).subscribe((sesion: Sesion) => {
      this.authStore.dispatch(cargarSesion({ sesion: sesion }));
      this.router.navigate(['inicio']);
    });
  }  

}
