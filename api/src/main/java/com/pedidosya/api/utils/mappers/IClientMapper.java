package com.pedidosya.api.utils.mappers;

import com.pedidosya.api.dto.Request.ClientDTO;
import com.pedidosya.api.models.Client;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface IClientMapper {

    ClientDTO toClientDto(Client client);

    Client toClient(ClientDTO clientDTO);

}
