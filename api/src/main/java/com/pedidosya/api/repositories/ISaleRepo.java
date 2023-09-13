package com.pedidosya.api.repositories;

import com.pedidosya.api.models.AddressClient;
import com.pedidosya.api.models.Province;
import com.pedidosya.api.models.Sale;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ISaleRepo extends IGenericRepo<Sale, Integer>{

    @Modifying
    @Query(value = "UPDATE sale SET status = :idStatus where id_sale=:idSale" , nativeQuery = true)
    Integer changeStatus(@Param("idSale") Integer idSale,@Param("idStatus") Integer idStatus );

    @Query("FROM Sale m " +
            "WHERE m.user.idUser = ?1 "
    )
    List<Sale> findAllByIdUser(Integer idUser);
}
