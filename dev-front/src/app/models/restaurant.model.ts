export interface RestaurantModel {
  id: number;
  name: string;
  minTime: number;
  maxTime: number;
  rating: number;
  deliveryCost: number;
  minToOrder: number;
  brandImage: string;
  productImage: string;
  favorite: boolean;
  takeAway: boolean;
}

export class Restaurant implements RestaurantModel {
  constructor(
    public id: number,
    public name: string,
    public minTime: number,
    public maxTime: number,
    public rating: number,
    public deliveryCost: number,
    public minToOrder: number,
    public brandImage: string,
    public productImage: string,
    public favorite: boolean,
    public takeAway: boolean,
  ) {
  }

  public hasFreeDelivered(): boolean {
    return this.deliveryCost == 0;
  }

  public hasFastDelivery(): boolean {
    const MAX_TIME_LIMIT = 30;//TODO:REVIEW + REFACTOR A CONSTANTES
    return this.maxTime < MAX_TIME_LIMIT;
  }

  public hasTakeAway(): boolean {
    return this.takeAway;
  }

  public hasDiscount(): boolean {
    //TODO:to implement
    return true;
  }

  public hasSimilarName(similarName: string): boolean {
    return this.name.toLowerCase().trim().includes(similarName);
  }

  public isFavorite(): boolean {
    return this.favorite;
  }

  /*TODO:REVIEW*/
  public hasPaymentCash(): boolean {
    return true;
  }

  /*TODO:REVIEW*/
  public hasPaymentCard(): boolean {
    return true;
  }

  /*TODO:REVIEW*/
  public isNewRestaurant(): boolean {
    return true;
  }

  /*TODO:REVIEW*/
  public hasLowerCost(): boolean {
    const LOWER_COST_LIMIT = 1000;//TODO:REVIEW + REFACTOR A CONSTANTS
    return this.deliveryCost < LOWER_COST_LIMIT;
  }


}
