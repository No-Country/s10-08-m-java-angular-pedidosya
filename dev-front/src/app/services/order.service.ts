import {Injectable} from '@angular/core';
import {Menu, MenuModel} from "@models/menu.model";
import {map, Observable} from "rxjs";
import {env} from "../../environment/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ProductModel} from "@models/product.model";
import {Restaurant} from "../models/restaurant.model";
import {OrderModel} from "@models/order.model";
import {ProductDto} from "@services/menu.service";
import {ItemModel} from "@models/item.model";


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  apiUrl: string = env.apiURL;
  imageFolders: string = 'assets/stores/'

  private readonly keyToken = 'jwt';

  constructor(private http: HttpClient) {
  }

  sendOrder(orderModels: OrderModel): Observable<any> {
    const options = {headers: this.getHeader()};

    const items: ItemDto[] = orderModels.items.map(item => {
      return {
        amount: item.unitPrice,
        quantity: item.quantity,
        productRating: 4,
        idProduct: item.product.id
      }
    })


    const body: OrderDto = {
      saleDate: '2023-09-13T14:35:17.694Z',
      status: 0,
      amount: orderModels.total,
      storeRating: 4,
      deliveryRating: true,
      deliveryReview: "Excelente",
      idDelivery: 1,
      idAddress: 11,//TODO: <-Esto esta hardcodeado
      idStore: orderModels.restaurant.id,
      details: items
    };


    let url = this.apiUrl + '/sales/save';


    return this.http.post(url, body, options).pipe();
  }

  private getHeader() {
    const token = localStorage.getItem(this.keyToken);
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

}

export interface OrderDto {
  saleDate: string;
  status: number,
  amount: number,
  storeRating: number,
  deliveryRating: true,
  deliveryReview: string,
  idDelivery: number,
  idAddress: number,
  idStore: number,
  details: ItemDto[]
}

export interface ItemDto {
  idProduct: number,
  quantity: number,
  amount: number,
  productRating: number
}

