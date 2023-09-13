import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.scss'],
  imports: [],
  standalone: true
})
export class TrackOrderComponent implements OnInit {
  orderStatus: string = '';
  estimatedTime: string = '';
  startTime: Date = new Date();
  stage: number = 1;

  constructor() { }

  ngOnInit(): void {
    const actualTime = new Date();

    this.startTime = new Date(actualTime);
    this.startTime.setMinutes(this.startTime.getMinutes() + 15);
    setInterval(() => {
      const tiempoActual = new Date();
      if (tiempoActual < this.startTime) {
        this.orderStatus = 'El local está preparando tu pedido';
        this.stage = 1;
      } else if (tiempoActual < this.getSendingTime()) {
        this.orderStatus = 'El repartidor está esperando tu pedido';
        this.stage = 2;
      } else {
        this.orderStatus = 'El repartidor está en camino';
        this.stage = 3;
      }
    }, 1000);

    const startTimeFormatted = this.formatTime(this.startTime);
    const endTimeFormatted = this.formatTime(this.getEstimatedEndTime());
    this.estimatedTime = `${startTimeFormatted} - ${endTimeFormatted}`;
  }

  getEstimatedEndTime(): Date {
    const endTime = new Date(this.startTime);
    endTime.setMinutes(endTime.getMinutes() + 15);
    return endTime;
  }

  getSendingTime(): Date { //Simula que el repartidor ya esta yendo con el pedido, 7 minutos antes de que llegue a el final del tiempo estimado
    const sendTime = new Date(this.getEstimatedEndTime());
    sendTime.setMinutes(sendTime.getMinutes() - 7);
    return sendTime;
  }

  formatTime(time: Date): string {
    return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
}
