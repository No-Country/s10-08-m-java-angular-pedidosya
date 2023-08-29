package com.pedidosya.api.utils.mappers;

import com.pedidosya.api.dto.Request.AddressClientDTO;
import com.pedidosya.api.dto.Request.ClientDTO;
import com.pedidosya.api.models.AddressClient;
import com.pedidosya.api.models.Client;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface IAddressClientMapper {
    AddressClientDTO toAddressClientDto(AddressClient addressClient);

    AddressClient toAddressClient(AddressClientDTO addressClientDTO);
}
