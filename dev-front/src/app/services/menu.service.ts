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
  imageFolders: string = 'assets/stores/'
  menusTopSelling: MenuModel = {
    id: 0,
    name: 'Mas vendidos',
    products: [
      {
        id: 1,
        name: 'Doble bacon chedar mcMelt mediano',
        price: 1000,
        description: 'Un medallón 100% carne vacuna.Abundante queso cheddar.Dos tiras de bacon enteras.Cebolla rillada.Pan con semillas de sésamo.',
        imageUrl: 'assets/mocks/product_example.png',
        favorite: true
      }, {
        id: 2,
        name: 'hamburguesa',
        price: 1000,
        description: 'Boil squid ultimately, then mix with buttermilk and serve roughly in soup pot.',
        imageUrl: 'assets/mocks/product_example.png',
        favorite: true
      }, {
        id: 3,
        name: 'hamburguesa',
        price: 1000,
        description: 'Boil squid ultimately, then mix with buttermilk and serve roughly in soup pot.',
        imageUrl: 'assets/mocks/product_example.png',
        favorite: true
      }, {
        id: 4,
        name: 'hamburguesa',
        price: 1000,
        description: 'Boil squid ultimately, then mix with buttermilk and serve roughly in soup pot.',
        imageUrl: 'assets/mocks/product_example.png',
        favorite: true
      }, {
        id: 5,
        name: 'hamburguesa',
        price: 1000,
        description: 'Boil squid ultimately, then mix with buttermilk and serve roughly in soup pot.',
        imageUrl: 'assets/mocks/product_example.png',
        favorite: true
      }, {
        id: 6,
        name: 'hamburguesa',
        price: 1000,
        description: 'Boil squid ultimately, then mix with buttermilk and serve roughly in soup pot.',
        imageUrl: 'assets/mocks/product_example.png',
        favorite: true
      }, {
        id: 7,
        name: 'hamburguesa',
        price: 1000,
        description: 'Boil squid ultimately, then mix with buttermilk and serve roughly in soup pot.',
        imageUrl: 'assets/mocks/product_example.png',
        favorite: true
      }, {
        id: 8,
        name: 'hamburguesa',
        price: 1000,
        description: 'Boil squid ultimately, then mix with buttermilk and serve roughly in soup pot.',
        imageUrl: 'assets/mocks/product_example.png',
        favorite: true
      }, {
        id: 9,
        name: 'hamburguesa',
        price: 1000,
        description: 'Boil squid ultimately, then mix with buttermilk and serve roughly in soup pot.',
        imageUrl: 'assets/mocks/product_example.png',
        favorite: true
      },
    ]
  }
  menusDiscount: MenuModel = {
    id: 1,
    name: 'Descuento',
    products: [
      {
        id: 10,
        name: 'hamburguesa',
        price: 1000,
        description: 'Boil squid ultimately, then mix with buttermilk and serve roughly in soup pot.',
        imageUrl: 'assets/mocks/product_example.png',
        favorite: true
      }, {
        id: 11,
        name: 'quinoa combines greatly with cold popcorn.  ',
        price: 1000,
        description: 'Boil squid ultimately, then mix with buttermilk and serve roughly in soup pot.',
        imageUrl: 'assets/mocks/product_example.png',
        favorite: true
      }, {
        id: 12,
        name: 'hamburguesa',
        price: 1000,
        description: 'Boil squid ultimately, then mix with buttermilk and serve roughly in soup pot.',
        imageUrl: 'assets/mocks/product_example.png',
        favorite: true
      }, {
        id: 13,
        name: 'hamburguesa',
        price: 1000,
        description: 'Boil squid ultimately, then mix with buttermilk and serve roughly in soup pot.',
        imageUrl: 'assets/mocks/product_example.png',
        favorite: true
      }, {
        id: 14,
        name: 'hamburguesa',
        price: 1000,
        description: 'Boil squid ultimately, then mix with buttermilk and serve roughly in soup pot.',
        imageUrl: 'assets/mocks/product_example.png',
        favorite: true
      }, {
        id: 15,
        name: 'hamburguesa',
        price: 1000,
        description: 'Boil squid ultimately, then mix with buttermilk and serve roughly in soup pot.',
        imageUrl: 'assets/mocks/product_example.png',
        favorite: true
      },
    ]
  }
  menus: MenuModel[] = [
    {
      id: 2,
      name: 'Hamburguesas',
      products: [
        {
          id: 16,
          name: 'hamburguesa',
          price: 1000,
          description: 'Boil squid ultimately, then mix with buttermilk and serve roughly in soup pot.',
          imageUrl: 'assets/mocks/product_example.png',
          favorite: true
        },
      ]
    },
    {
      id: 3,
      name: 'Meriendas',
      products: [
        {
          id: 17,
          name: 'hamburguesa',
          price: 1000,
          description: 'Boil squid ultimately, then mix with buttermilk and serve roughly in soup pot.',
          imageUrl: 'assets/mocks/product_example.png',
          favorite: true
        }, {
          id: 18,
          name: 'quinoa combines greatly with cold popcorn.  ',
          price: 1000,
          description: 'Boil squid ultimately, then mix with buttermilk and serve roughly in soup pot.',
          imageUrl: 'assets/mocks/product_example.png',
          favorite: true
        }, {
          id: 19,
          name: 'hamburguesa',
          price: 1000,
          description: 'Boil squid ultimately, then mix with buttermilk and serve roughly in soup pot.',
          imageUrl: 'assets/mocks/product_example.png',
          favorite: true
        }, {
          id: 20,
          name: 'hamburguesa',
          price: 1000,
          description: 'Boil squid ultimately, then mix with buttermilk and serve roughly in soup pot.',
          imageUrl: 'assets/mocks/product_example.png',
          favorite: true
        }, {
          id: 21,
          name: 'hamburguesa',
          price: 1000,
          description: 'Boil squid ultimately, then mix with buttermilk and serve roughly in soup pot.',
          imageUrl: 'assets/mocks/product_example.png',
          favorite: true
        }, {
          id: 22,
          name: 'hamburguesa',
          price: 1000,
          description: 'Boil squid ultimately, then mix with buttermilk and serve roughly in soup pot.',
          imageUrl: 'assets/mocks/product_example.png',
          favorite: true
        },
      ]
    },
  ]
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
      imageUrl: this.imageFolders + productDto.imagePath,
      price: productDto.price,
      favorite: productDto.isFavourite ? productDto.isFavourite : false,
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
  active: true,
  isFavourite: boolean ,
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


