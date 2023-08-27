import {Component} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MaterialModule} from "@shared/material.module";
import {FilterButtonComponent} from "@root/restaurant/components/filter-button/filter-button.component";
import {SearchInputComponent} from "@root/restaurant/components/search-input/search-input.component";

@Component({
  selector: 'app-restaurant-header',
  templateUrl: './restaurant-header.component.html',
  styleUrls: ['./restaurant-header.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatIconModule,
    MaterialModule,
    FilterButtonComponent,
    SearchInputComponent
  ]
})
export class RestaurantHeaderComponent {

}
