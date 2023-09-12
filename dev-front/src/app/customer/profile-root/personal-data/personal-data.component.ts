import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../auth/services/auth.service';
import { ClientUpdateDTO } from '@models/dtos.model';


@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss', '../profile-root.scss']
})
export class PersonalDataComponent {
  myForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router, 
    private authService: AuthService,
    private toastrService: ToastrService ) { 
      this.myForm = this.fb.group({
        // firstName: ['', [Validators.required, Validators.maxLength(15)]],
        // lastName: ['', [Validators.required]],
      })      
    }
    
    ngOnInit(): void {
      this.myForm = new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl()
      });
  
    //  localStorage.setItem('user', JSON.stringify(data))
      this.authService.getClientInfo()
        .subscribe((response: ClientUpdateDTO) => {
          console.log('response-set', response);
          localStorage.setItem('client', JSON.stringify(response));
          this.myForm.patchValue({
            firstName: response.firstName,
            lastName: response.lastName,
          });
          });        
  
    }
    
    UpdateClient(): void {
      const tmp = localStorage.getItem('client');
      console.log('client', tmp);
      let dataClient: ClientUpdateDTO = JSON.parse(localStorage.getItem('client') || '');

      dataClient.firstName = this.myForm.value.firstName;
      dataClient.lastName = this.myForm.value.lastName;
      console.log('UpdateClient', dataClient);

      this.authService.clientUpdate(dataClient).subscribe(
        (response: any) => {
          this.toastrService.success('Client ha sido actualizado', dataClient.firstName);
          console.log('Register  ok', dataClient);

          this.router.navigate(['customer/perfil']);
        },
        (error: any) => {
          console.log('Failed', error);
          this.toastrService.error('Un error se ha producido', error.message);
        }
      ); 

    }

}
