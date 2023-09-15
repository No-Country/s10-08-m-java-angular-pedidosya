package com.pedidosya.api.services;

import com.pedidosya.api.models.Client;

import java.util.Optional;


public interface IClientService extends ICRUD<Client, Integer>{

    public Client updatePerfil(Client client);

    public Client readByIdUser(Integer idUser);

    public Boolean verifyEmail(String email);
    }
