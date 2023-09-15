import { AddressModel } from "./address.model"
import { Address } from "./addressDto"
import { RestaurantModel, RestaurantModelLogoPath } from "./restaurant.model"

export interface SaleDto     {
    idSale:	number,
    saleDate:	string,
    status:	number,
    amount:	number,//d
    storeRating:	number,
    deliveryRating:	boolean,
    deliveryReview:	string,
    idDelivery:	number,
    idAddress:	number,
    idStore:	number,
    details:	[]
}

export interface SaleDetailDto {
    idSaleDetail:	number,
    idProduct:	number,
    quantity:	number,
    amount:	number,//d
    productRating:	number,
}
//tiene id user
export interface SaleResponseDto {
    idSale:	number,
    saleDate:	string,
    status:	number,
    amount:	number,//d
    storeRating:	number,
    deliveryRating:	boolean,
    deliveryReview:	string,
    idUser:	number,
    idDelivery:	number,
    address:	AddressModel,
    store:	RestaurantModelLogoPath,
    details:  SaleDetailDto[]
}

export interface SaleStatusDto{
    idSale:	number,
    idStatus:	number
}