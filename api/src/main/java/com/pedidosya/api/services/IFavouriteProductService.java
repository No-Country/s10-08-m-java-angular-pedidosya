package com.pedidosya.api.services;

import com.pedidosya.api.models.FavouriteProduct;
import com.pedidosya.api.models.FavouriteStore;

public interface IFavouriteProductService extends ICRUD<FavouriteProduct, Integer>{
    Void save(Integer idUser, Integer idProduct);
    Void remove(Integer idUser, Integer idProduct);
}