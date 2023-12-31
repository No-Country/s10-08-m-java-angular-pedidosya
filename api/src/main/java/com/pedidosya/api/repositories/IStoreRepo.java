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
            "AND m.user.idUser = ?2"
    )
    FavouriteStore findByFavourite(Integer idStore, Integer idUser);

    @Query("FROM Store m INNER JOIN FavouriteStore f ON f.store.idStore = m.idStore " +
            "WHERE f.user.idUser = ?1 "
    )
    List<Store> findByStoreFavourite(Integer idUser);

    @Query("SELECT round(avg(m.storeRating),2) FROM Sale m " +
            "WHERE m.storeRating != null AND m.store.idStore = ?1 "
    )
    Float calculateRating(Integer idStore);
}
