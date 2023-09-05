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

  public getProductByName(name: string | null): ProductModel[] {
    if (name == null) return this.products;

    let nameNormalized = name.toLowerCase().trim();
    if (nameNormalized.length === 0) return this.products;

    return this.products = this.products.filter(product => product.name.toLowerCase().trim().includes(nameNormalized))
  }


}
