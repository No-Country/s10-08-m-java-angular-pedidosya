package com.pedidosya.api.services.Impl;

import com.pedidosya.api.models.Client;
import com.pedidosya.api.repositories.IGenericRepo;
import com.pedidosya.api.services.IClientService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ClientImpl extends CRUDImpl<Client, Integer> implements IClientService {
    @Override
    protected IGenericRepo<Client, Integer> getRepo() {
        return null;
    }

    @Override
    public Client save(Client client) {
        return null;
    }

    @Override
    public Client update(Client client) {
        return null;
    }
}
