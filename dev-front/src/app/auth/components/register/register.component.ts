import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { SignUpDTO } from '@models/dtos.model';
import { AuthService } from '../../services/auth.service';
import { cargarSesion } from '../../state/auth.actions';
import { AuthState } from '../../state/auth.reducer';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../shared-auth-styles.scss']
})

export class RegisterComponent {
  myForm!: FormGroup;
  submitted = false;

  constructor(
		private router: Router,
		private fb: FormBuilder,
		private authService: AuthService,
		private toastrService: ToastrService
	) {
		this.myForm = this.fb.group({
			firstName: ['', [Validators.required]],
			lastName: ['', [Validators.required]],
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.minLength(1)]],
      		passwordConfirm: ['', [Validators.required]]
		});
	}

  ngOnInit(): void {
	localStorage.clear();
  }

  register(): void {
    // todo: validate password
    const pass = this.myForm.value.password;
    const passconf = this.myForm.value.passwordConfirm;

	if (pass != passconf) {
		this.toastrService.error('Registracion fallo', 'Contraseñas y su verificacion son diferentes');
		return;
	};

	const data: SignUpDTO = {
		firstName: this.myForm.value.firstName,
		lastName: this.myForm.value.lastName,		
		  active: true,
		  user: {
			email: this.myForm.value.email,
			password: this.myForm.value.password,
			role: 'C',
			}
	};

	this.authService.isUserRegisted(data.user.email).subscribe(response=>{
		if(response)
		{
			this.toastrService.error('Registracion fallida', 'Usuario ya esta registrado');
		}	
		else {
			console.log('Pre-Register', data);
			localStorage.setItem('user', JSON.stringify(data))
			this.router.navigate(['auth/selectUserType']);
		}

	  });

  }

	ClientType(): void {
		// this.socialAuthService.signOut();
	  }  

	  get f(): { [key: string]: AbstractControl } {
		return this.myForm.controls;
	  }	  

}
