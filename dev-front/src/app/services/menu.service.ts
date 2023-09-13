import {Injectable} from '@angular/core';
import {Menu, MenuModel} from "@models/menu.model";
import {forkJoin, map, Observable} from "rxjs";
import {env} from "../../environment/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ProductModel} from "@models/product.model";


@Injectable({
  providedIn: 'root'
})
export class MenuService {
  apiUrl: string = env.apiURL;
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


  getMenus(idRestaurant: number | null): Observable<{ topSelling: Menu, discounts: Menu, others: Menu[] }> {
    const options = {headers: this.getHeader()};
    const body = {};
    const urlAllMenus = this.apiUrl + `/menus/store-list/${idRestaurant}`;
    const urlTopMenu = this.apiUrl + `/products/top/${idRestaurant}`;
    const urlDiscounts = this.apiUrl + `/menus/discount-list/${idRestaurant}`;

    // Observables para las tres solicitudes HTTP
    const topMenu$ = this.http.get<productDto[]>(urlTopMenu, options);
    const discounts$ = this.http.get<menuDto>(urlDiscounts, options);
    const allMenus$ = this.http.get<menuDto[]>(urlAllMenus, options);

    // Combinar todas las observables usando forkJoin
    //return forkJoin([topMenu$, discounts$, allMenus$]).pipe(
    return forkJoin([allMenus$]).pipe(
      map(([allMenusResponse]) => {
        const allMenus = {
          topSelling: new Menu(1, 'Mas vendidos', []),
          discounts: new Menu(1, 'Descuentos', []),
          others: allMenusResponse.map(menuDto => this.mapMenuDtoToMenu(menuDto)),
        };
        return allMenus;
      }),
    );
  }

  private getHeader() {
    const token = localStorage.getItem(this.keyToken);
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  private mapProductDtoToProduct(productDto: productDto): ProductModel {
    return {
      id: productDto.idProduct,
      name: productDto.title,
      description: productDto.description,
      imageUrl: productDto.imagePath,
      price: productDto.price,
      favorite: productDto.isFavourite ?? false,
    };
  }

  private mapMenuDtoToMenu(menuDto: menuDto): Menu {
    const products: ProductModel[] = menuDto.products.map(productDto => this.mapProductDtoToProduct(productDto));
    return new Menu(menuDto.idMenu, menuDto.title, products);
  }

}

export interface productDto {
  idProduct: number,
  title: string,
  description: string,
  price: number,
  imagePath: string,
  productType: {
    idProductType: number,
    title: string
  },
  active: true,
  isFavourite: boolean | null,
  productDiscount: boolean | null
}

export interface menuDto {
  idMenu: number,
  title: string,
  idStore: number,
  products: productDto[]
}
