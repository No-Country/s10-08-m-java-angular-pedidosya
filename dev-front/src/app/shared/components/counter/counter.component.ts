import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  count = 0;
  @Output() countChange = new EventEmitter<number>();

  increment() {
    this.count++;
    this.emitCount();
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
      this.emitCount();
    }
  }

  private emitCount() {
    this.countChange.emit(this.count);
  }

}
