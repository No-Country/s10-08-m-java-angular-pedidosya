import {Injectable} from '@angular/core';
import {Restaurant, RestaurantModel} from "@models/restaurant.model";
import {map, Observable} from "rxjs";
import {env} from "../../environment/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RestaurantTypeModel} from "@models/restaurant-type.model";


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  apiUrl: string = env.apiURL;
  imageFolders: string = 'assets/stores/'
  restaurantsAPI: RestaurantModel[] = [
    {
      id: 1,
      name: "Burguer King",
      minTime: 10,
      maxTime: 15,
      rating: 4.1,
      deliveryCost: 1000,
      minToOrder: 2999,
      brandImage: "assets/mocks/logo.png",
      productImage: "assets/mocks/image.png",
      favorite: true,
      takeAway: false,
    },
    {
      id: 2,
      name: "McDonald´s",
      minTime: 10,
      maxTime: 30,
      rating: 4.1,
      deliveryCost: 0,
      minToOrder: 1199,
      brandImage: "assets/mocks/logo.png",
      productImage: "assets/mocks/image.png",
      favorite: true,
      takeAway: false,
    }
    , {
      id: 3,
      name: "Residente",
      minTime: 15,
      maxTime: 60,
      rating: 4.3,
      deliveryCost: 499,
      minToOrder: 0,
      brandImage: "assets/mocks/brand_r.png",
      productImage: "assets/mocks/product_r.png",
      favorite: false,
      takeAway: true,
    },
    {
      id: 4,
      name: "Burguer Queen",
      minTime: 10,
      maxTime: 15,
      rating: 4.1,
      deliveryCost: 600,
      minToOrder: 0,
      brandImage: "assets/mocks/logo.png",
      productImage: "assets/mocks/image.png",
      favorite: false,
      takeAway: true,
    },
    {
      id: 5,
      name: "Burguer Prince",
      minTime: 10,
      maxTime: 15,
      rating: 2,
      deliveryCost: 600,
      minToOrder: 999,
      brandImage: "assets/mocks/logo.png",
      productImage: "assets/mocks/image.png",
      favorite: false,
      takeAway: true,
    }
  ]
  private readonly keyToken = 'jwt';

  constructor(private http: HttpClient) {
  }

  getRestaurantsByType({idStoreType}: RestaurantTypeModel): Observable<Restaurant[]> {
    const url = this.apiUrl + `/stores/type/${idStoreType}`;
    const options = {headers: this.getHeader()};

    return this.http.get<StoreDto[]>(url, options).pipe(
      map(apiResponse => apiResponse.map(storeDto => this.mapStoreDtoToRestaurant(storeDto)))
    );
  }


  setFavoriteRestaurant(id: number, isFavorite: boolean): Observable<any> {
    const options = {headers: this.getHeader()};
    const body = {};

    let url = this.apiUrl;

    if (isFavorite) {
      url += `/favourites-stores/add/${id}`;
    } else {
      url += `/favourites-stores/remove/${id}`;
    }

    return this.http.post(url, body, options).pipe();
  }


  getRestaurantFavorites(): Observable<any[]> {
    const url = this.apiUrl + `/stores/favourites`;
    const options = {headers: this.getHeader()};

    // return this.http.get<StoreDto[]>(url, options).pipe(
    //   map(apiResponse => apiResponse.map(storeDto => this.mapStoreDtoToRestaurant(storeDto)))
    // );

    return this.http
    .get<StoreDto[]>(url, options);

    // return this.http.get<StoreDto[]>(url, options).pipe(
    //   map(apiResponse => apiResponse.map(storeDto => this.mapStoreDtoToRestaurant(storeDto)))
    // );    
  }


  private getHeader() {
    const token = localStorage.getItem(this.keyToken);
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  private mapStoreDtoToRestaurant(storeDto: StoreDto): Restaurant {
    console.log(`${this.imageFolders}${storeDto.logoPath}`)
    return new Restaurant(
      storeDto.idStore,
      storeDto.title,
      storeDto.timeFrom,
      storeDto.timeTo,
      4, //TODO-> Review
      storeDto.shippingCost,
      storeDto.minPurchase,
      `${this.imageFolders}${storeDto.logoPath}`,
      `${this.imageFolders}${storeDto.imagePath}`,
      storeDto.isFavourite,
      storeDto.takeAway,
    );
  }

}

export interface StoreDto {
  "idStore": number,
  "title": string,
  "phone": string,
  "storeType": {
    "idStoreType": 0,
    "title": "string",
    "image_path": "string"
  },
  "active": true,
  "imagePath": string,
  "logoPath": string,
  "address": {
    "idAddress": 0,
    "description": "string",
    "latitude": 0,
    "longitude": 0,
    "idCity": 0
  },
  "idUser": number,
  "shippingCost": number,
  "minPurchase": number,
  "timeFrom": number,
  "timeTo": number,
  "isFavourite": boolean,
  "takeAway": boolean
}
