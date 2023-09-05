import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {RouterLink} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-button-nav-back',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatTooltipModule, RouterLink, MatButtonModule],
  templateUrl: './button-nav-back.component.html',
  styleUrls: ['./button-nav-back.component.scss']
})
export class ButtonNavBackComponent {
  @Input() url: string = ""
}
