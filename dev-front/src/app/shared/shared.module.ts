import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { ToastrModule } from 'ngx-toastr';
import { ProductFilterPipe } from "@shared/pipes/product-filter.pipe";


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
    ProductFilterPipe
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ProductFilterPipe,
  ]
})
export class SharedModule {
}
