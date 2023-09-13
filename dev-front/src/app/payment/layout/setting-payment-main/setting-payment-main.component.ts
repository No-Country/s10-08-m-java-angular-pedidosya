import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-setting-payment-main',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatIconModule, MatInputModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './setting-payment-main.component.html',
  styleUrls: ['./setting-payment-main.component.scss']
})
export class SettingPaymentMainComponent {
  form: FormGroup = new FormGroup({
    amount: new FormControl('0', [Validators.required, Validators.pattern(/^[0-9]+(\.[0-9]+)?$/)]),
  });

  getErrorMessage() {
    if (this.form.get('amount')?.hasError('pattern')) {
      return 'La cantidades deben ser numeros.';
    }
    if (this.form.get('amount')?.hasError('required')) {
      return 'Debe ingresar un monto.';
    }
    return ''
  }

  saveOptions() {
    console.log("Se debe guardar informacion")
    return;
  }
}
