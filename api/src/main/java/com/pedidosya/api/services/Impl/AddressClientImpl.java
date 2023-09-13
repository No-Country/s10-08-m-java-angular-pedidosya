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

import java.util.List;

@Service
@RequiredArgsConstructor
public class AddressClientImpl extends CRUDImpl<AddressClient, Integer> implements IAddressClientService {

    private final IAddressClientRepo repo;
    private final IAddressRepo repoAddress;

    @Override
    protected IGenericRepo<AddressClient, Integer> getRepo() {
        return repo;
    }

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
        repo.removeDefault(addressClient.getClient().getIdClient());
        repo.setDefault(addressClient.getClient().getIdClient(), addressClient.getAddress().getIdAddress(), addressClient.isSet());
        return null;
    }

    @Transactional
    @Override
    public AddressClient updateAddress(AddressClient addressClient)
    {
        Address adress =  repoAddress.save(addressClient.getAddress());
        repo.updateAddressClient(addressClient.getClient().getIdClient(), adress.getIdAddress(), addressClient.isSet());
        return addressClient;
    }

    @Override
    public List<AddressClient> listAddressClient(Integer idClient)
    {
        return repo.findAllByIdClient(idClient);

    }
}
