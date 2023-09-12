package com.pedidosya.api.services;

import com.pedidosya.api.models.AddressClient;
import com.pedidosya.api.models.FavouriteStore;
import com.pedidosya.api.models.Menu;

public interface IFavouriteStoreService extends ICRUD<FavouriteStore, Integer>{
    Void save(Integer idUser, Integer idStore);
    Void remove(Integer idUser, Integer idStore);
}
