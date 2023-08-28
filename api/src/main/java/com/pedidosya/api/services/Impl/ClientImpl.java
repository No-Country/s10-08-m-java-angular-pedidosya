package com.pedidosya.api.services.Impl;

import com.pedidosya.api.dto.Request.ClientDTO;
import com.pedidosya.api.models.Client;
import com.pedidosya.api.repositories.IClientRepo;
import com.pedidosya.api.repositories.IGenericRepo;
import com.pedidosya.api.services.IClientService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ClientImpl extends CRUDImpl<Client, Integer> implements IClientService {

    private final IClientRepo repo;

    @Override
    protected IGenericRepo<Client, Integer> getRepo() {
        return repo;
    }

    @Override
    public List<Client> readAll() {
        return repo.findAll();
    }
}
