package com.pedidosya.api.services;


import com.pedidosya.api.models.Address;
import com.pedidosya.api.models.AddressClient;
import com.pedidosya.api.models.AddressClientPK;

import java.util.List;

public interface IAddressClientService {
    Void saveAddress(AddressClient addressClient);

    Void setDefault(AddressClient addressClient);
}
