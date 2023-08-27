import {Component, Input} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ]
})
export class SearchInputComponent {
  @Input() label!: string
  @Input() placeholder!: string

}
