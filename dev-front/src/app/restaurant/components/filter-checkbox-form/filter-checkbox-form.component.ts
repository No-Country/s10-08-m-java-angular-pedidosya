import {Component, Input} from '@angular/core';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-filter-checkbox-form',
  templateUrl: './filter-checkbox-form.component.html',
  styleUrls: ['./filter-checkbox-form.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatCheckboxModule],
})
export class FilterCheckboxFormComponent {


  @Input() benefits!: FormGroup
  @Input() payment!: FormGroup
  @Input() other!: FormGroup


  constructor(private _formBuilder: FormBuilder) {
  }


}
