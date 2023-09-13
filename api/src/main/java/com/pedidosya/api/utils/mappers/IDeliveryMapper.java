package com.pedidosya.api.utils.mappers;

import com.pedidosya.api.dto.Request.CountryDTO;
import com.pedidosya.api.dto.Request.DeliveryDTO;
import com.pedidosya.api.models.Country;
import com.pedidosya.api.models.Delivery;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface IDeliveryMapper {

    DeliveryDTO toCountryDto(Delivery delivery);
    Delivery toCountry(DeliveryDTO deliveryDTO);
}
