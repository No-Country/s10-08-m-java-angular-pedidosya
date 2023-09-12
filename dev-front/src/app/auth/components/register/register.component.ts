import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(
		private router: Router,
		private fb: FormBuilder,
		// private authService: AuthService,
    	private authService: AuthService,
		private toastrService: ToastrService
	) {
		this.myForm = this.fb.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required]],
      		passwordConfirm: [''],
			firstName: ['', [Validators.required]],
			lastName: ['', [Validators.required]]
		});
	}

  ngOnInit(): void {
	localStorage.clear();
  }

  register(): void {
    // todo: validate password
    const pass = this.myForm.value.password;
    const passconf = this.myForm.value.passwordConfirm;

	if (pass === passconf) {
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
		
		console.log('Pre-Register', data);
				
		localStorage.setItem('user', JSON.stringify(data))
		this.router.navigate(['auth/selectUserType']);
	}
	else {
		this.toastrService.error('Register Failed', 'Verificar confirmacion declave');

	}
    


	}

	ClientType(): void {
		// this.socialAuthService.signOut();
	  }  

}
