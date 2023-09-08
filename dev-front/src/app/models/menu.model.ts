import {ProductModel} from "@models/product.model";

export interface MenuModel {
  id: number,
  name: string,
  products: ProductModel[]
}

export class Menu implements MenuModel {
  id: number;
  name: string;
  products: ProductModel[];

  constructor(id: number, name: string, products: ProductModel[]) {
    this.id = id;
    this.name = name;
    this.products = products;
  }




}
