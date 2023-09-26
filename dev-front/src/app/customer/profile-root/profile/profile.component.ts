import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  fullname:string = '';
  email: string = '';

  constructor(
    private router: Router, 
    private authService: AuthService ) { }

    ngOnInit(): void {
  
      this.authService.getClientInfo()
        .subscribe((response) => {
          console.log('response', response);
          this.fullname= response.firstName + ' ' + response.lastName
          this.email = response.email;
        }
  
      );
    }

}
