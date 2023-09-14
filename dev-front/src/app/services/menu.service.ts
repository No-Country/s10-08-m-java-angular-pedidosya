import {Injectable} from '@angular/core';
import {Menu, MenuModel} from "@models/menu.model";
import {map, Observable} from "rxjs";
import {env} from "../../environment/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ProductModel} from "@models/product.model";


@Injectable({
  providedIn: 'root'
})
export class MenuService {
  apiUrl: string = env.apiURL;

  private readonly keyToken = 'jwt';

  constructor(private http: HttpClient) {
  }


  getMenus(idRestaurant: number | null): Observable<{ others: Menu[] }> {
    const options = {headers: this.getHeader()};
    const urlAllMenus = this.apiUrl + `/menus/store-list/${idRestaurant}`;

    return this.http.get<MenuDto[]>(urlAllMenus, options).pipe(
      map(allMenusResponse => ({
        others: allMenusResponse.map(menuDto => this.mapMenuDtoToMenu(menuDto)),
      }))
    );
  }

  getDiscounts(idRestaurant: number | null): Observable<{ discounts: Menu | null }> {
    const options = {headers: this.getHeader()};
    const urlAllMenus = this.apiUrl + `/menus/discount-list/${idRestaurant}`;

    return this.http.get<MenuDto[]>(urlAllMenus, options).pipe(
      map(allMenusResponse => {
          let products: ProductModel[] = allMenusResponse.flatMap(a => a.products).map(products => this.mapProductDtoToProduct(products))
          return {
            discounts: new Menu(0, 'Descuentos', products)
          }
        }
      )
    );
  }

  getTopSelling(idRestaurant: number | null): Observable<{ topSelling: Menu | null }> {
    const options = {headers: this.getHeader()};
    const urlAllMenus = this.apiUrl + `/products/top/{idStore}?idStore=${idRestaurant}`;

    return this.http.get<ProductDto[]>(urlAllMenus, options).pipe(
      map(productsResponse => {

          const products = productsResponse.map(products => this.mapProductDtoToProduct(products))
          return {
            topSelling: new Menu(0, 'Más vendidos', products)
          }
        }
      )
    );
  }

  setFavoriteProduct(id: number, isFavorite: boolean): Observable<any> {
    const options = {headers: this.getHeader()};
    const body = {};

    let url = this.apiUrl;

    if (isFavorite) {
      url += `/favourites-products/add/${id}`;
    } else {
      url += `/favourites-products/remove/${id}`;
    }

    return this.http.post(url, body, options).pipe();
  }

  private getHeader() {
    const token = localStorage.getItem(this.keyToken);
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  private mapProductDtoToProduct(productDto: ProductDto): ProductModel {
    return {
      id: productDto.idProduct,
      name: productDto.title,
      description: productDto.description,
      imageUrl: productDto.imagePath,
      price: productDto.price,
      favorite: productDto.isFavourite ? productDto.isFavourite : false,
      discount: productDto.productDiscount ? productDto.productDiscount.percentage:0
    };
  }

  private mapMenuDtoToMenu(menuDto: MenuDto): Menu {
    const products: ProductModel[] = menuDto.products.map(productDto => this.mapProductDtoToProduct(productDto));
    return new Menu(menuDto.idMenu, menuDto.title, products);
  }

}

export interface ProductDto {
  idProduct: number,
  title: string,
  description: string,
  price: number,
  imagePath: string,
  productType: ProductType,
  active: boolean,
  isFavourite: boolean,
  productDiscount: DiscountDto | null
}

export interface ProductType {
  idProductType: number,
  title: string
}

export interface DiscountDto {
  idProductDiscount: number,
  percentage: number
}

export interface MenuDto {
  idMenu: number,
  title: string,
  idStore: number,
  products: ProductDto[]
}


