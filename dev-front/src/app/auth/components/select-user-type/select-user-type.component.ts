import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserTypes } from '@models/AllTypes.enum';
import { ToastrService } from 'ngx-toastr';

interface DTOSignUp {
	firstName: string | null,
	lastName: string | null,
	active: boolean,
	user: DTOUser
}

interface DTOUser {
	email: string | null,
	password: string | null,
	role: string | null
} 


@Component({
  selector: 'app-select-user-type',
  templateUrl: './select-user-type.component.html',
  styleUrls: ['../shared-auth-styles.scss']
})
export class SelectUserTypeComponent {

 
  selectedUserType?: any;
  options: Array<{key: string, value: string}> = [
    {key: 'C', value: 'Client'},
    {key: 'D', value: 'Delivery'},
    {key: 'L', value: 'Local'}  
  ];

  keys = Object.keys(UserTypes)


  constructor(
    private router: Router,
    private authService: AuthService,
    // private toastrService: ToastrService
  ) {

    // this.keys.forEach((key, index) => {
    //   console.log(`${key} has index ${this.keys}`)
    // })
  }  

  onSelect(userType: any): void {
    console.log ('onSelect', userType);
    this.selectedUserType = userType;
  }

  register(): void {

    // const dataUser: DTOUser = {
    //   email: localStorage.getItem('email'),
    //   password: localStorage.getItem('password'),
    //   role: localStorage.getItem('active')
    // };    

    // const data: DTOSignUp = {
    //   firstName: localStorage.getItem('firstname'),
    //   lastName: localStorage.getItem('lastname'),		
    //   active: localStorage.getItem('active')=== 'true',
    //   user: dataUser
    // };

    let dataSignUp: DTOSignUp = JSON.parse(localStorage.getItem('user') || '');
    dataSignUp.user.role = UserTypes.CLIENT;
    
    console.log ('dataSignUp', dataSignUp)

		this.authService.createUser(dataSignUp).subscribe(
			(response: any) => {
				//this.toastrService.success('Usuario registrado', dataSignUp.firstName + ', vienvenido');
        	console.log('Register  ok', dataSignUp);
          // localStorage.removeItem('email');
          // localStorage.removeItem('password');
          // localStorage.removeItem('firstname');
          // localStorage.removeItem('lastname');				
				this.router.navigate(['auth/login']);
			},
			(error: any) => {
        console.log('failed', error.message);
				//this.toastrService.error('Process fallo', error.message);
			}
		);    

  }

}
