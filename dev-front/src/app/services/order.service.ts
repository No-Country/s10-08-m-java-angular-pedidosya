import {Injectable} from '@angular/core';
import {Menu, MenuModel} from "@models/menu.model";
import {map, Observable} from "rxjs";
import {env} from "../../environment/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ProductModel} from "@models/product.model";
import {Restaurant} from "../models/restaurant.model";


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  apiUrl: string = env.apiURL;
  imageFolders: string = 'assets/stores/'

  private readonly keyToken = 'jwt';

  constructor(private http: HttpClient) {
  }




  sendOrder(product:ProductModel[]): Observable<any> {
    const options = {headers: this.getHeader()};
    const body = {};

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
  "idSale": 0,
  "saleDate": "2023-09-13T20:17:03.870Z",
  "status": 0,
  "amount": 0,
  "storeRating": 0,
  "deliveryRating": true,
  "deliveryReview": "string",
  "idDelivery": 0,
  "idAddress": 0,
  "idStore": 0,
  "details": [
    {
      "idSaleDetail": 0,
      "idProduct": 0,
      "quantity": 0,
      "amount": 0,
      "productRating": 0
    }
  ]
}

