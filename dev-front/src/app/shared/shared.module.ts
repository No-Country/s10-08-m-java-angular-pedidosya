import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
    imports: [
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
		ToastrModule.forRoot({
			timeOut: 6000, // 6 seconds
			closeButton: true,
			progressBar: true,
		}),        
    ],
    declarations: [
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
    ]
})
export class SharedModule { }
