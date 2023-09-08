import {ProductModel} from "@models/product.model";

export interface ItemModel {
  product: ProductModel;
  quantity: number;
  unitPrice: number;
}
