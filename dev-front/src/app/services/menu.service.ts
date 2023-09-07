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




  getMenus(idRestaurant: number | null): Observable<{ topSelling: Menu, discounts: Menu, others: Menu[] }> {

    return of({
      topSelling: new Menu(this.menusTopSelling.id, this.menusTopSelling.name, [...this.menusTopSelling.products]),
      discounts: new Menu(this.menusDiscount.id, this.menusDiscount.name, [...this.menusDiscount.products]),
      others: this.menus.map(menu => new Menu(menu.id, menu.name, [...menu.products]))
    }).pipe(delay(1000));
  }


}
