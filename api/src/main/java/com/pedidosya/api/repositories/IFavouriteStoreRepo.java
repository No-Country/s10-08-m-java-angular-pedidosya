package com.pedidosya.api.repositories;

import com.pedidosya.api.models.Country;
import com.pedidosya.api.models.FavouriteStore;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IFavouriteStoreRepo extends IGenericRepo<FavouriteStore, Integer>{

    @Modifying
    @Query(value = "INSERT INTO favourite_store (id_user, id_store) VALUES(:idUser, :idStore)" , nativeQuery = true)
    Integer save(@Param("idUser") Integer idUser, @Param("idStore") Integer idStore);

    @Modifying
    @Query(value = "DELETE FROM favourite_store WHERE  id_user= :idUser AND id_store= :idStore" , nativeQuery = true)
    void remove(@Param("idUser") Integer idUser, @Param("idStore") Integer idStore);

}
