package com.pedidosya.api.repositories;

import com.pedidosya.api.models.FavouriteProduct;
import com.pedidosya.api.models.FavouriteStore;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IFavouriteProductRepo extends IGenericRepo<FavouriteProduct, Integer> {

    @Modifying
    @Query(value = "INSERT INTO favourite_product (id_user, id_product) VALUES(:idUser, :idProduct)", nativeQuery = true)
    Integer save(@Param("idUser") Integer idUser, @Param("idProduct") Integer idStore);

    @Modifying
    @Query(value = "DELETE FROM favourite_product WHERE  id_user= :idUser AND id_store= :idProduct", nativeQuery = true)
    void remove(@Param("idUser") Integer idUser, @Param("idProduct") Integer idProduct);
}