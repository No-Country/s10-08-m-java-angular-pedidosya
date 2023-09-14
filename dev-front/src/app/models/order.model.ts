import {ItemModel} from "@models/item.model";
import {AddressModel} from "@models/address.model";
import {Restaurant} from "@models/restaurant.model";

export interface OrderModel{
  orderId: number;//"idSale": 0, null
  items:ItemModel[],
  total:number,
  status:number//TODO:->Preguntar
  //"deliveryRating": true, null
  //"deliveryReview": "string", null
  //"idDelivery": 0,
  address: AddressModel,
  restaurant:Restaurant,
}
