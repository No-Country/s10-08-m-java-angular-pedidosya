package com.pedidosya.api.repositories;

import com.pedidosya.api.models.AddressClient;
import com.pedidosya.api.models.FavouriteStore;
import com.pedidosya.api.models.Store;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IStoreRepo extends IGenericRepo<Store, Integer>{

    @Query("FROM Store m " +
            "WHERE m.storeType.idStoreType = ?1 "
    )
    List<Store> findByStoreType(Integer idStoreType);

    @Query("FROM FavouriteStore m " +
            "WHERE m.store.idStore = ?1 "+
            "AND m.client.idClient = ?2"
    )
    FavouriteStore findByFavourite(Integer idStore, Integer idUser);

    @Query("FROM Store m INNER JOIN FavouriteStore f ON f.store.idStore = m.idStore " +
            "WHERE f.client.idClient = ?1 "
    )
    List<Store> findByStoreFavourite(Integer idUser);

}
