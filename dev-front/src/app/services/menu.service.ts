import {Injectable} from '@angular/core';
import {Menu, MenuModel} from "@models/menu.model";
import {delay, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menusTopSelling: MenuModel = {
    id: 0,
    name: 'Mas vendidos',
    products: [
      {
        id: 1,
        name: 'hamburguesa',
        price: 1000,
        description: 'Boil squid ultimately, then mix with buttermilk and serve roughly in soup pot.',
        imageUrl: 'assets/mocks/product_example.png',
        favorite: true
      }, {
        id: 1,
        name: 'hamburguesa',
        price: 1000,
        description: 'Boil squid ultimately, then mix with buttermilk and serve roughly in soup pot.',
        imageUrl: 'assets/mocks/product_example.png',
        favorite: true
      }, {
        id: 1,
        name: 'hamburguesa',
        price: 1000,
        description: 'Boil squid ultimately, then mix with buttermilk and serve roughly in soup pot.',
        imageUrl: 'assets/mocks/product_example.png',
        favorite: true
      }, {
        id: 1,
        name: 'hamburguesa',
        price: 1000,
        description: 'Boil squid ultimately, then mix with buttermilk and serve roughly in soup pot.',
        imageUrl: 'assets/mocks/product_example.png',
        favorite: true
      }, {
        id: 1,
        name: 'hamburguesa',
        price: 1000,
        description: 'Boil squid ultimately, then mix with buttermilk and serve roughly in soup pot.',
        imageUrl: 'assets/mocks/product_example.png',
        favorite: true
      }, {
        id: 1,
        name: 'hamburguesa',
        price: 1000,
        description: 'Boil squid ultimately, then mix with buttermilk and serve roughly in soup pot.',
        imageUrl: 'assets/mocks/product_example.png',
        favorite: true
      }, {
        id: 1,
        name: 'hamburguesa',
        price: 1000,
        description: 'Boil squid ultimately, then mix with buttermilk and serve roughly in soup pot.',
        imageUrl: 'assets/mocks/product_example.png',
        favorite: true
      }, {
        id: 1,
        name: 'hamburguesa',
        price: 1000,
        description: 'Boil squid ultimately, then mix with buttermilk and serve roughly in soup pot.',
        imageUrl: 'assets/mocks/product_example.png',
        favorite: true
      }, {
        id: 1,
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
        id: 1,
        name: 'hamburguesa',
        price: 1000,
        description: 'Boil squid ultimately, then mix with buttermilk and serve roughly in soup pot.',
        imageUrl: 'assets/mocks/product_example.png',
        favorite: true
      }, {
        id: 1,
        name: 'quinoa combines greatly with cold popcorn.  ',
        price: 1000,
        description: 'Boil squid ultimately, then mix with buttermilk and serve roughly in soup pot.',
        imageUrl: 'assets/mocks/product_example.png',
        favorite: true
      }, {
        id: 1,
        name: 'hamburguesa',
        price: 1000,
        description: 'Boil squid ultimately, then mix with buttermilk and serve roughly in soup pot.',
        imageUrl: 'assets/mocks/product_example.png',
        favorite: true
      }, {
        id: 1,
        name: 'hamburguesa',
        price: 1000,
        description: 'Boil squid ultimately, then mix with buttermilk and serve roughly in soup pot.',
        imageUrl: 'assets/mocks/product_example.png',
        favorite: true
      }, {
        id: 1,
        name: 'hamburguesa',
        price: 1000,
        description: 'Boil squid ultimately, then mix with buttermilk and serve roughly in soup pot.',
        imageUrl: 'assets/mocks/product_example.png',
        favorite: true
      }, {
        id: 1,
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
          id: 1,
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
          id: 1,
          name: 'hamburguesa',
          price: 1000,
          description: 'Boil squid ultimately, then mix with buttermilk and serve roughly in soup pot.',
          imageUrl: 'assets/mocks/product_example.png',
          favorite: true
        }, {
          id: 1,
          name: 'quinoa combines greatly with cold popcorn.  ',
          price: 1000,
          description: 'Boil squid ultimately, then mix with buttermilk and serve roughly in soup pot.',
          imageUrl: 'assets/mocks/product_example.png',
          favorite: true
        }, {
          id: 1,
          name: 'hamburguesa',
          price: 1000,
          description: 'Boil squid ultimately, then mix with buttermilk and serve roughly in soup pot.',
          imageUrl: 'assets/mocks/product_example.png',
          favorite: true
        }, {
          id: 1,
          name: 'hamburguesa',
          price: 1000,
          description: 'Boil squid ultimately, then mix with buttermilk and serve roughly in soup pot.',
          imageUrl: 'assets/mocks/product_example.png',
          favorite: true
        }, {
          id: 1,
          name: 'hamburguesa',
          price: 1000,
          description: 'Boil squid ultimately, then mix with buttermilk and serve roughly in soup pot.',
          imageUrl: 'assets/mocks/product_example.png',
          favorite: true
        }, {
          id: 1,
          name: 'hamburguesa',
          price: 1000,
          description: 'Boil squid ultimately, then mix with buttermilk and serve roughly in soup pot.',
          imageUrl: 'assets/mocks/product_example.png',
          favorite: true
        },
      ]
    },
  ]

  constructor() {
  }

  loadMenus(idRestaurant: number | null): Observable<{ topSelling: Menu, discounts: Menu, others: Menu[] }> {

    return of({
      topSelling: new Menu(this.menusTopSelling.id, this.menusTopSelling.name, [...this.menusTopSelling.products]),
      discounts: new Menu(this.menusDiscount.id, this.menusDiscount.name, [...this.menusDiscount.products]),
      others: this.menus.map(menu => new Menu(menu.id, menu.name, [...menu.products]))
    }).pipe(delay(1000));
  }


}
