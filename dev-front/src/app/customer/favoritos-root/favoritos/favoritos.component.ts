import { Component } from '@angular/core';
import { RestaurantModel } from '@models/restaurant.model';
import { RestaurantService} from '@services/restaurant.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss','../../profile-root/profile-root.scss']
})
export class FavoritosComponent {

  restaurants: StoreDto[] | undefined;
  restList$!: Observable<StoreDto[]>;
  foundFavorities: boolean = false;

  constructor(
      private restaurantService: RestaurantService,
    // private router: Router,
    // private toastrService: ToastrService
  ){}

  ngOnInit(): void {

    this.restList$ = this.restaurantService.getRestaurantFavorites();
    this.restList$.subscribe(response => {
      this.restaurants = response;
			console.log('Rest-favourites-list', this.restaurants);
      this.foundFavorities = this.restaurants.length > 0;
		});
    this.restaurants?.forEach(rest => {
      //console.log(contact.firstName + " " + contact.lastName);
    });

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
