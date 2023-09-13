import {Component} from '@angular/core';
import {MatRadioModule} from "@angular/material/radio";
import {NgForOf} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-setting-delivery-main',
  templateUrl: './setting-delivery-main.component.html',
  styleUrls: ['./setting-delivery-main.component.scss'],
  standalone: true,
  imports: [
    MatRadioModule,
    NgForOf,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class SettingDeliveryMainComponent {
  timeForm: FormGroup;
  timeOptions: {
    id: number,
    label: string,
    minTime: string,
    maxTime: string
  }[] = [];

  constructor(private fb: FormBuilder) {
    this.timeForm = this.fb.group({
      selectedTime: ''
    });

    // Obtén la hora actual
    const now = new Date();
    const startTime = new Date(now);
    startTime.setMinutes(0);
    startTime.setSeconds(0);

    // Genera los intervalos de tiempo y descripciones
    for (let i = 0; i < 10; i++) {
      const endTime = new Date(startTime);
      endTime.setMinutes(startTime.getMinutes() + 15);
      this.timeOptions.push({
        id: i,
        label: `Entre las ${startTime.getHours().toString().padStart(2, '0')}:${startTime.getMinutes().toString().padStart(2, '0')} y ${endTime.getHours().toString().padStart(2, '0')}:${endTime.getMinutes().toString().padStart(2, '0')} hs`,
        minTime: `${startTime.getHours()}:${startTime.getMinutes()}`,
        maxTime: `${endTime.getHours()}:${endTime.getMinutes()}`
      });
      startTime.setMinutes(startTime.getMinutes() + 15);
    }
  }

  saveOptions() {
    console.log("Se debe guardar informacion")
    return;
  }
}
