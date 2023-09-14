import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-modal-confirm',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent {
  ngOnInit() {
    setTimeout(() => {
      const element = document.getElementById('check');
      if (element) {
        element.classList.add('active');
      }
    }, 500);
  }
}
