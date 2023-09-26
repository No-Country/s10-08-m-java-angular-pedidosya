import {Component, Input} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-button-favorite',
  templateUrl: './button-favorite.component.html',
  styleUrls: ['./button-favorite.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule
  ]
})
export class ButtonFavoriteComponent {
  @Input() favorite!: boolean;


}
