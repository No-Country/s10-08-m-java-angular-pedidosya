package com.pedidosya.api.repositories;

import com.pedidosya.api.models.AddressClient;
import com.pedidosya.api.models.Store;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IStoreRepo extends IGenericRepo<Store, Integer>{

    @Query("FROM Store m " +
            "WHERE m.storeType.idStoreType = ?1 "
    )
    List<Store> findByStoreType(Integer idStoreType);

}
