import {ItemModel} from "@models/item.model";
import {OrderStatus} from "@models/AllTypes.enum";
import {Restaurant} from "@models/restaurant.model";
import {ProductModel} from "@models/product.model";

export interface CartModel {
  items: ItemModel[]
  status: OrderStatus;
}

export class Cart implements CartModel {
  restaurant: Restaurant;
  items: ItemModel[];
  status: OrderStatus;


  constructor(restaurant: Restaurant, products: ItemModel[], status: OrderStatus) {
    this.restaurant = restaurant;
    this.items = products;
    this.status = status;
  }

  /*INMUTABLE -> NEW CART*/
  addProduct(product: ProductModel, quantity: number): Cart {
    const newItem: ItemModel = {
      product: product,
      quantity: quantity,
      unitPrice: product.price
    }


    const newItems: ItemModel[] = [...this.items];

    console.log(newItems)

    newItems.push(newItem);
    console.log(newItems)

    return new Cart(this.restaurant, newItems, this.status);
  }


  getTotal(): number {
    return this.getTotalProductPrice() + this.restaurant.deliveryCost;
  }

  getTotalProductPrice(): number {
    return this.items.reduce((previousValue, product) => previousValue + product.unitPrice * product.quantity, 0);
  }

}
