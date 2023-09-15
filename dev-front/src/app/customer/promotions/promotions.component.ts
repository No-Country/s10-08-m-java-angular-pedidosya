import { Component } from '@angular/core';

interface Promotion{
  imagenBanco: string,
  area: string,
  descuento: string,
  banco: string,
  listaDeImagenesDeTarjetas: string[],
  tipoTarjeta: string,
  dias: string,

}

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss','../profile-root/profile-root.scss']
})

export class PromotionsComponent {

  promotions: Promotion[]=[
    {
      imagenBanco: "../../../assets/images/promos/bancos/santander.png",
      area: "En todos los restaurantes",
      descuento: "30% DE REINTEGRO",
      banco: "Banco Santander Río",
      listaDeImagenesDeTarjetas: ["../../../assets/images/promos/tarjetas/mastercard.png","../../../assets/images/promos/tarjetas/visa.png"],
      tipoTarjeta: "Crédito",
      dias: "Martes - Jueves",
    },
    {
      imagenBanco: "../../../assets/images/promos/bancos/macro.png",
      area: "En toda la app",
      descuento: "35% DE REINTEGRO",
      banco: "Banco Macro",
      listaDeImagenesDeTarjetas: ["../../../assets/images/promos/tarjetas/visa.png"],
      tipoTarjeta: "Crédito",
      dias: "Todos los martes",
    },
    {
      imagenBanco: "../../../assets/images/promos/bancos/icbc.png",
      area: "En heladerías",
      descuento: "20% DE REINTEGRO",
      banco: "Banco ICBC",
      listaDeImagenesDeTarjetas: ["../../../assets/images/promos/tarjetas/visa.png"],
      tipoTarjeta: "Débito",
      dias: "Todos los lunes",
    },
    {
      imagenBanco: "../../../assets/images/promos/bancos/santander.png",
      area: "En todos los restaurantes",
      descuento: "15% DE DESCUENTO",
      banco: "Banco Santander Río",
      listaDeImagenesDeTarjetas: ["../../../assets/images/promos/tarjetas/mastercard.png","../../../assets/images/promos/tarjetas/visa.png"],
      tipoTarjeta: "Débito",
      dias: "Todos los miércoles",
    }
  ]

  promotionsOportunities: Promotion[]=[
    {
      imagenBanco: "../../../assets/images/promos/bancos/prex.png",
      area: "En todos los restaurantes",
      descuento: "30% OFF",
      banco: "Prex",
      listaDeImagenesDeTarjetas: ["../../../assets/images/promos/tarjetas/mastercard.png"],
      tipoTarjeta: "",
      dias: "Todos los viernes",
    },
    {
      imagenBanco: "../../../assets/images/promos/bancos/modo.png",
      area: "En toda la app",
      descuento: "15% DE REINTEGRO",
      banco: "MODO",
      listaDeImagenesDeTarjetas: [],
      tipoTarjeta: "",
      dias: "Todos los jueves",
    }
  ]
  

}
