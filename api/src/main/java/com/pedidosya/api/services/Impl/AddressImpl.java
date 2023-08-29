package com.pedidosya.api.services.Impl;

import com.pedidosya.api.models.Address;
import com.pedidosya.api.models.Client;
import com.pedidosya.api.repositories.IAddressRepo;
import com.pedidosya.api.repositories.IClientRepo;
import com.pedidosya.api.repositories.IGenericRepo;
import com.pedidosya.api.services.IAddressService;
import com.pedidosya.api.services.IClientService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AddressImpl  extends CRUDImpl<Address, Integer> implements IAddressService {
    private final IAddressRepo repo;

    @Override
    protected IGenericRepo<Address, Integer> getRepo() {
        return repo;
    }
}
