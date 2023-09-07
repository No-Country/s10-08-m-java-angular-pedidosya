import {Component, Input} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  standalone: true,
  imports: [
    MatIconModule
  ]
})
export class RatingComponent {
  @Input() rating: number = 0
}
