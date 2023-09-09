package com.pedidosya.api.repositories;

import com.pedidosya.api.models.AddressClient;
import com.pedidosya.api.models.Menu;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IMenuRepo extends IGenericRepo<Menu, Integer>{
    @Query("FROM Menu m " +
            "WHERE m.store.idStore = ?1 "
    )
    List<Menu> findByStore(Integer idStore);
}
