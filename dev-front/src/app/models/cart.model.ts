import {ItemModel} from "@models/item.model";
import {Restaurant} from "@models/restaurant.model";
import {ProductModel} from "@models/product.model";

export interface CartModel {
  items: ItemModel[]
}

export class Cart implements CartModel {
  restaurant: Restaurant;
  items: ItemModel[];


  constructor(restaurant: Restaurant, products: ItemModel[]) {
    this.restaurant = restaurant;
    this.items = products;

  }

  isProductInCart(product: ProductModel): boolean {
    return this.items.some(item => item.product.id === product.id);
  }

  addItem(newItem: ItemModel): Cart {
    const items: ItemModel[] = this.items.slice(); // Create a shallow copy of the original items array
    const index = items.findIndex(item => item.product.id === newItem.product.id);

    if (index !== -1) {
      items[index] = newItem;
    } else {
      items.push(newItem);
    }

    return new Cart(this.restaurant, items);
  }


  removeItemByProduct(product: ProductModel): Cart {

    const newItems: ItemModel[] = this.items.filter(item => item.product !== product);


    return new Cart(this.restaurant, newItems);
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
    let item = this.items.find(item => item.product.id === product.id);

    return item ? item.quantity : 0;
  }

  hasItems(): boolean {
    return this.items.length > 0;
  }

}
