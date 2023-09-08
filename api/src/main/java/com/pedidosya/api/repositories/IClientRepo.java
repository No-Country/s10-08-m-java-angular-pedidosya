package com.pedidosya.api.repositories;

import com.pedidosya.api.models.Client;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IClientRepo extends IGenericRepo<Client, Integer>{

    @Transactional
    @Modifying
    @Query(value = "UPDATE client SET first_name =:firstName, last_name = :lastName where id_client=:idClient" , nativeQuery = true)
    void updatePerfil(@Param("idClient") Integer idClient, @Param("firstName") String firstName, @Param("lastName") String lastName);


}
