package com.pedidosya.api.utils.mappers;

import com.pedidosya.api.dto.Request.AddressClientDTO;
import com.pedidosya.api.dto.Request.AddressDTO;
import com.pedidosya.api.models.Address;
import com.pedidosya.api.models.AddressClient;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface IAddressMapper {

    AddressDTO toAddressDto(Address address);

    Address toAddress(AddressDTO addressDTO);
}
