package com.pedidosya.api.repositories;

import com.pedidosya.api.models.Address;
import com.pedidosya.api.models.AddressClient;
import com.pedidosya.api.models.AddressClientPK;
import com.pedidosya.api.models.Client;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IAddressClientRepo extends IGenericRepo<AddressClient, Integer>{
    @Modifying
    @Query(value = "INSERT INTO address_client(id_client, id_address, set) VALUES(:idClient, :idAddress, :set)" , nativeQuery = true)
    Integer saveAddressClient(@Param("idClient") Integer idClient, @Param("idAddress") Integer idAddress, @Param("set") Boolean set);


    @Modifying
    @Query(value = "UPDATE address_client SET set = :set where id_client=:idClient and  id_address= :idAddress " , nativeQuery = true)
    Integer setDefault(@Param("idClient") Integer idClient, @Param("idAddress") Integer idAddress, @Param("set") Boolean set);

    @Modifying
    @Query(value = "UPDATE address_client SET set = :set where id_client=:idClient and  id_address= :idAddress" , nativeQuery = true)
    Integer updateAddressClient(@Param("idClient") Integer idClient, @Param("idAddress") Integer idAddress, @Param("set") Boolean set);

    @Modifying
    @Query(value = "UPDATE address_client SET set = false where id_client=:idClient" , nativeQuery = true)
    Integer removeDefault(@Param("idClient") Integer idClient);


    @Query("FROM AddressClient m " +
            "WHERE m.client.idClient = ?1 "
    )
    List<AddressClient> findAllByIdClient(Integer idClient);

    @Query("SELECT m FROM AddressClient m " +
            "WHERE m.set = true AND m.client.idClient = ?1 ")
    AddressClient findAllByIdClientDefault(Integer idClient);

}
