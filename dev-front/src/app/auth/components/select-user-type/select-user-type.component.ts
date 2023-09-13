import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserTypes } from '@models/AllTypes.enum';
import { SignUpDTO } from '@models/dtos.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-select-user-type',
  templateUrl: './select-user-type.component.html',
  styleUrls: ['../shared-auth-styles.scss']
})
export class SelectUserTypeComponent {

 
  selectedUserType?: any;

  options: Array<{id: string, name: string}> = [];

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastrService: ToastrService
  ) {

        
    this.options = Object.keys(UserTypes)
        .filter((v) => isNaN(Number(v)))
        .map((name) => {
          return {
            id: UserTypes[name as keyof typeof UserTypes],
            name,
          };
        });
        
      console.log(this.options); 

  }  

  onSelect(userType: any): void {
    this.selectedUserType = userType;
    console.log ('onSelect', userType);    
    console.log ('onSelect', this.selectedUserType.id);
  }

  register(): void {

    let dataSignUp: SignUpDTO = JSON.parse(localStorage.getItem('user') || '');
    if (this.selectedUserType === undefined)
      dataSignUp.user.role = 'C'
    else {
      dataSignUp.user.role = this.selectedUserType.id; 
    }

		this.authService.userRegistration(dataSignUp).subscribe(
			(response: any) => {
				this.toastrService.success('Usuario registrado', dataSignUp.firstName + ', vienvenido');
        console.log('Register  ok', dataSignUp);
				this.router.navigate(['auth/login']);
			},
			(error: any) => {
        console.log('failed', error.message);
				this.toastrService.error('Process fallo', error.message);
			}
		);    

  }

}
