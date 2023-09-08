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

  isProductInCart(product: ProductModel): boolean {
    return this.items.some(item => item.product.id === product.id);
  }

  addItem(product: ProductModel, quantity: number): Cart {
    const newItem: ItemModel = {
      product: product,
      quantity: quantity,
      unitPrice: product.price
    }

    const newItems: ItemModel[] = this.items.filter(item => item.product !== product);
    newItems.push(newItem);

    return new Cart(this.restaurant, newItems, OrderStatus.IS_ORDERING);
  }


  removeItem(product: ProductModel): Cart {

    const newItems: ItemModel[] = this.items.filter(item => item.product !== product);


    return new Cart(this.restaurant, newItems, this.status);
  }


  getTotal(): number {
    return this.getTotalProductPrice() + this.restaurant.deliveryCost;
  }

  getTotalProductPrice(): number {
    return this.items.reduce((previousValue, product) => previousValue + product.unitPrice * product.quantity, 0);
  }

  getDeliveryCost(): number {
    return this.restaurant.deliveryCost;
  }

  getQuantityBy(product: ProductModel): number {
    let item = this.items.find(item => item.product === product);

    return item ? item.quantity : 0;
  }

}
