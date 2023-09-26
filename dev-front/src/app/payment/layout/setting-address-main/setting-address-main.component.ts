import {Component} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgFor, NgForOf, NgIf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-setting-address-main',
  templateUrl: './setting-address-main.component.html',
  styleUrls: ['./setting-address-main.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule, MatSelectModule, NgFor, MatInputModule, FormsModule, NgForOf, NgIf,
    ReactiveFormsModule, MatButtonModule
  ]
})
export class SettingAddressMainComponent {
  countries: Country[] = [
    {name: 'Argentina', abbr: 'ar', value: '+54'},
    {name: 'Bolivia', abbr: 'bo', value: '+591'},
    {name: 'Brasil', abbr: 'br', value: '+55'},
    {name: 'Canadá', abbr: 'ca', value: '+1'},
    {name: 'Chile', abbr: 'cl', value: '+56'},
    {name: 'Colombia', abbr: 'co', value: '+57'},
    {name: 'Costa Rica', abbr: 'cr', value: '+506'},
    {name: 'Cuba', abbr: 'cu', value: '+53'},
    {name: 'Ecuador', abbr: 'ec', value: '+593'},
    {name: 'El Salvador', abbr: 'sv', value: '+503'},
    {name: 'Estados Unidos', abbr: 'us', value: '+1'},
    {name: 'Guatemala', abbr: 'gt', value: '+502'},
    {name: 'Honduras', abbr: 'hn', value: '+504'},
    {name: 'México', abbr: 'mx', value: '+52'},
    {name: 'Nicaragua', abbr: 'ni', value: '+505'},
    {name: 'Panamá', abbr: 'pa', value: '+507'},
    {name: 'Paraguay', abbr: 'py', value: '+595'},
    {name: 'Perú', abbr: 'pe', value: '+51'},
    {name: 'Uruguay', abbr: 'uy', value: '+598'},
    {name: 'Venezuela', abbr: 've', value: '+58'},
  ];
  countryFlag: string = this.countries[0].abbr;
  selectedCountry: string = this.countries[0].value;


  form: FormGroup = new FormGroup({
    address: new FormControl('', [Validators.required]),
    tel: new FormControl('', [Validators.required]),
    apartment: new FormControl(''),
    details: new FormControl(''),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]),
    selectedCountry: new FormControl('+54', [Validators.required]),
  });


  getErrorMessage() {
    if (this.form.get('address')?.hasError('required')) {
      return 'Debe ingresar una dirección';
    }
    if (this.form.get('phone')?.hasError('pattern')) {
      return 'El teléfono es inválido';
    }
    if (this.form.get('phone')?.hasError('required')) {
      return 'Debe ingresar un teléfono';
    }
    return ''
  }

  updateFlag(country: Country) {

    this.countryFlag = country.abbr

  }

  saveOptions() {
    console.log("Se debe guardar informacion")
    return;
  }

}

export interface Country {
  name: string,
  abbr: string,
  value: string
}
