import {ItemModel} from "@models/item.model";

export interface OrderModel{
  orderId: number;
  items:ItemModel[]
}
