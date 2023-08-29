package com.pedidosya.api.utils.mappers;

import com.pedidosya.api.dto.Request.AddressDTO;
import com.pedidosya.api.dto.Request.CityDTO;
import com.pedidosya.api.models.Address;
import com.pedidosya.api.models.City;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ICityMapper {
   CityDTO toCityDto(City city);

    City toCity(CityDTO cityDTO);
}
