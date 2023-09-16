package com.pedidosya.api.services;


import com.pedidosya.api.models.Address;
import com.pedidosya.api.models.AddressClient;
import com.pedidosya.api.models.AddressClientPK;
import com.pedidosya.api.models.Client;

import java.util.List;

public interface IAddressClientService  extends ICRUD<AddressClient, Integer>{

    Void saveAddress(AddressClient addressClient);

    Void setDefault(AddressClient addressClient);

    AddressClient updateAddress(AddressClient addressClient);

    List<AddressClient> listAddressClient(Integer idClient);

    AddressClient listAddressClientDefault(Integer idClient);

}
