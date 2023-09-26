import { Component, OnInit } from '@angular/core';
import { SaleResponseDto } from '@models/sales.model';
import { SaleService } from '@services/sale.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss','../profile-root/profile-root.scss']
})
export class OrdersComponent implements OnInit {
  
  pedidos: SaleResponseDto[]=[]

  entregados: boolean = true;
  entregadosCancelados: number = 5;

  constructor(private saleService: SaleService){

  }

  ngOnInit(): void {
    this.getPedidos()
    console.log(this.pedidos)
  }

  changeEntregadosACancelados(){
    this.entregados=!this.entregados;
    if(this.entregadosCancelados==6){
      this.entregadosCancelados=5;
    }
    else{
      this.entregadosCancelados=6;
    }
  }

  getPedidos(): void{
    this.saleService.getListOfSales().subscribe(
      (response) => {
        console.log("La solicitud Get se completó con éxito", response);
        this.pedidos = response;
      },
      (error) => {
        console.error("Error al realizar la solicitud Get", error);
      }
    );
  }

}
