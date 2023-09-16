package com.pedidosya.api.services;

import com.pedidosya.api.models.Client;
import com.pedidosya.api.models.Menu;

import java.util.List;

public interface IMenuService extends ICRUD<Menu, Integer>{
    public List<Menu> listMenuByStore(Integer idStore);
    public Boolean findByFavourite(Integer idProduct, Integer idUser);
    public List<Menu> listMenuByStoreAndDiscount(Integer idStore);
}
