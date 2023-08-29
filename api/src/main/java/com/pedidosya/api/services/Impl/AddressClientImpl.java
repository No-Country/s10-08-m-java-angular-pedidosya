package com.pedidosya.api.services.Impl;

import com.pedidosya.api.models.Address;
import com.pedidosya.api.models.AddressClient;
import com.pedidosya.api.models.AddressClientPK;
import com.pedidosya.api.models.Client;
import com.pedidosya.api.repositories.IAddressClientRepo;
import com.pedidosya.api.repositories.IAddressRepo;
import com.pedidosya.api.repositories.IGenericRepo;
import com.pedidosya.api.services.IAddressClientService;
import com.pedidosya.api.services.IAddressService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AddressClientImpl implements IAddressClientService {

    private final IAddressClientRepo repo;
    private final IAddressRepo repoAddress;

    @Transactional
    @Override
    public Void saveAddress(AddressClient addressClient)
    {
      Address adress =  repoAddress.save(addressClient.getAddress());
      repo.saveAddressClient(addressClient.getClient().getIdClient(), adress.getIdAddress(), addressClient.isSet());
      return null;
    }
    @Transactional
    @Override
    public Void setDefault(AddressClient addressClient)
    {
        repo.setDefault(addressClient.getClient().getIdClient(), addressClient.getAddress().getIdAddress(), addressClient.isSet());
        return null;
    }
}
