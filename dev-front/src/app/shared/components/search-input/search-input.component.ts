import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule
  ]
})
export class SearchInputComponent {
  @Input() label!: string
  @Input() placeholder!: string
  @Output() searchTermChange = new EventEmitter<string>();


  searchTerm: string=''

  onSearchChange(): void {
    this.searchTermChange.emit(this.searchTerm);
  }


}
