package com.pedidosya.api.services;

import com.pedidosya.api.dto.Request.MenuDTO;
import com.pedidosya.api.models.Client;
import com.pedidosya.api.models.Store;

import java.util.List;

public interface IStoreService extends ICRUD<Store, Integer>{
    public Store findByIdStore( Integer idStore);

    public List<Store> findByStoreType(Integer idStoreType);

    public Boolean findByFavourite(Integer idStore, Integer idUser);

    public  List<Store> findByStoreFavourite(Integer idUser);

    public Float calculateRating( Integer idStore);

}
