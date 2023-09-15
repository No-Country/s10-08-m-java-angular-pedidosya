package com.pedidosya.api.services.Impl;

import com.pedidosya.api.models.Client;
import com.pedidosya.api.repositories.IClientRepo;
import com.pedidosya.api.repositories.IGenericRepo;
import com.pedidosya.api.services.IClientService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

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

    @Override
    public Client readByIdUser(Integer idUser) {
        return repo.readByIdUser(idUser);
    }

    @Transactional
    @Override
    public Client updatePerfil(Client client) {
        repo.updatePerfil(client.getIdClient(), client.getFirstName(), client.getLastName());
        return repo.findById(client.getIdClient()).orElse(client);
    }

    @Override
    public Boolean verifyEmail(String email) {
        return repo.readByIdUserEmail(email) != null;
    }


}
