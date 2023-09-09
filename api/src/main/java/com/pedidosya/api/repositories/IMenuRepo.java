package com.pedidosya.api.repositories;

import com.pedidosya.api.models.AddressClient;
import com.pedidosya.api.models.FavouriteProduct;
import com.pedidosya.api.models.FavouriteStore;
import com.pedidosya.api.models.Menu;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IMenuRepo extends IGenericRepo<Menu, Integer>{
    @Query("FROM Menu m " +
            "WHERE m.store.idStore = ?1 "
    )
    List<Menu> findByStore(Integer idStore);

    @Query("FROM FavouriteProduct m " +
            "WHERE m.product.idProduct = ?1 "+
            "AND m.user.idUser = ?2"
    )
    FavouriteProduct findByFavourite(Integer idProduct, Integer idUser);
}
