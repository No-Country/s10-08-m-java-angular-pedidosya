package com.pedidosya.api.utils.mappers;

import com.pedidosya.api.dto.Request.AddressClientDTO;
import com.pedidosya.api.dto.Request.AddressDTO;
import com.pedidosya.api.models.Address;
import com.pedidosya.api.models.AddressClient;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = { ICityMapper.class })
public interface IAddressMapper {

    @Mapping(source = "city.idCity", target = "idCity")
    AddressDTO toAddressDto(Address address);

    @Mapping(source = "idCity", target = "city.idCity")
    Address toAddress(AddressDTO addressDTO);
}
