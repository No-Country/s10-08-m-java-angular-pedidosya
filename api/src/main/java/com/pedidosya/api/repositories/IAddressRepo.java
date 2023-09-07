package com.pedidosya.api.repositories;

import com.pedidosya.api.models.Address;
import com.pedidosya.api.models.AddressClient;
import com.pedidosya.api.models.Client;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IAddressRepo extends IGenericRepo<Address, Integer>{

}
