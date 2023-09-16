package com.pedidosya.api.utils.mappers;

import com.pedidosya.api.dto.Request.AddressClientDTO;
import com.pedidosya.api.dto.Request.ClientDTO;
import com.pedidosya.api.models.AddressClient;
import com.pedidosya.api.models.Client;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = { IAddressMapper.class })
public interface IAddressClientMapper {
    @Mapping(source = "client.idClient", target = "idClient")
    AddressClientDTO toAddressClientDto(AddressClient addressClient);
    @Mapping(source = "idClient", target = "client.idClient")
    AddressClient toAddressClient(AddressClientDTO addressClientDTO);
}
