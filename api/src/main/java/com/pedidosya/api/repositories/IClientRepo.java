package com.pedidosya.api.repositories;

import com.pedidosya.api.models.AddressClient;
import com.pedidosya.api.models.Client;
import com.pedidosya.api.models.User;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IClientRepo extends IGenericRepo<Client, Integer>{

    @Transactional
    @Modifying
    @Query(value = "UPDATE client SET first_name =:firstName, last_name = :lastName where id_client=:idClient" , nativeQuery = true)
    void updatePerfil(@Param("idClient") Integer idClient, @Param("firstName") String firstName, @Param("lastName") String lastName);

    @Query("FROM Client c INNER JOIN User u ON u.idUser= c.user.idUser " +
            "WHERE u.idUser = ?1 "
    )
    Client readByIdUser(Integer idUser);

    @Query("FROM User c " +
            "WHERE c.email = ?1 "
    )
    User readByIdUserEmail(String email);


}
