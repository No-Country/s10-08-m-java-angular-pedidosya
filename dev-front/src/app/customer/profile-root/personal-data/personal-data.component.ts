import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';


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
    private authService: AuthService ) { 
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
  
    
      this.authService.getClientInfo()
        .subscribe((response) => {
          console.log('response-set', response);
          this.myForm.patchValue({
            firstName: response.firstName,
            lastName: response.lastName,
          });
          });        
  
    }    

}
