package com.pedidosya.api.utils.mappers;

import com.pedidosya.api.dto.Request.CountryDTO;
import com.pedidosya.api.models.Country;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ICountryMapper {

    CountryDTO toCountryDto(Country country);
    Country toCountry(CountryDTO countryDTO);
}
