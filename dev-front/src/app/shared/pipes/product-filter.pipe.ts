import {Pipe, PipeTransform} from '@angular/core';
import {ProductModel} from "@models/product.model";

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: ProductModel[], searchText: string | null): ProductModel[] {
    if (!searchText || !products) {
      return products;
    }

    const searchTextNormalized = searchText.toLowerCase().trim();

    if (searchTextNormalized === '') {
      return products;
    }

    return products.filter(product =>
      product.name.toLowerCase().includes(searchTextNormalized)
    );
  }
}
